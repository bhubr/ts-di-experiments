import * as express from 'express';
import * as session from 'express-session';
import { resolve } from 'path';

import HomeController from './controllers/home';
import AuthController from './controllers/auth';
import loggedInUserMiddleware from './middlewares/logged-in-user';

const app: express.Application = express();
const homeController = new HomeController();
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
