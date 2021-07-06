import * as express from 'express';
import { resolve } from 'path';

import HomeController from './controllers/home';

const app: express.Application = express();
const homeController = new HomeController();

app.use(express.json());
app.set('views', resolve(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.route('/')
  .get(homeController.index);

app.route('/about')
  .get(homeController.about);

export default app;
