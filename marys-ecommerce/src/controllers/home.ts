import * as express from 'express';
import Product from '../models/product';
import ProductService from '../services/product';

class HomeController {
  async index(req: express.Request, res: express.Response) {
    const isPreferredCustomer: boolean = !!req.user && req.user.isInRole('PreferredCustomer');
    const service = new ProductService();

    const products: Array<Product> = await service.getFeaturedProducts(isPreferredCustomer);

    return res.render('home', { products });
  }

  about(req: express.Request, res: express.Response) {
    const pagetitle = 'About';
    const sitetitle = "Mary's e-commerce site";
    const message = 'Nothing much to see here';
    return res.render('about', { pagetitle, sitetitle, message });
  }
}

export default HomeController;
