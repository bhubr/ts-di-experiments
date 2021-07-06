import * as express from 'express';
import * as session from 'express-session';
import { resolve } from 'path';

import HomeController from './controllers/home';
import AuthController from './controllers/auth';
import loggedInUserMiddleware from './middlewares/logged-in-user';
import ProductService from './services/product';
import SQLProductRepository from './repositories/sqlproductrepository';
import Db from './db';

const app: express.Application = express();
const productRepository = new SQLProductRepository(new Db());
const productService = new ProductService(productRepository);
const homeController = new HomeController(productService);
const authController = new AuthController();

app.set('views', resolve(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(loggedInUserMiddleware);

app.route('/')
  .get(homeController.index);
app.route('/about')
  .get(homeController.about);

app.get('/login-as', authController.loginAs);
app.get('/logout', authController.logout);

export default app;
