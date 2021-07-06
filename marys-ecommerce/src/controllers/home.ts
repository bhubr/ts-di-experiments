import * as express from 'express';
import Product from '../models/product';
import ProductService from '../services/product';

class HomeController {
  sitetitle: string = "Mary's e-commerce site";

  constructor() {
    this.index = this.index.bind(this);
    this.about = this.about.bind(this);
  }

  async index(req: express.Request, res: express.Response) {
    const isPreferredCustomer: boolean = !!req.user && req.user.isInRole('PreferredCustomer');
    const service = new ProductService();

    const products: Array<Product> = await service.getFeaturedProducts(isPreferredCustomer);

    return res.render('home', {
      sitetitle: this.sitetitle,
      pagetitle: 'Home',
      products,
      user: req.user,
    });
  }

  about(req: express.Request, res: express.Response) {
    return res.render('about', {
      sitetitle: this.sitetitle,
      pagetitle: 'About',
      message: 'Nothing much to see here',
      user: req.user,
    });
  }
}

export default HomeController;
