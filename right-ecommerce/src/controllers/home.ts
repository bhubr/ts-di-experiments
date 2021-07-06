import * as express from 'express';
import IProductService from '../services/iproduct';
import DiscountedProduct from '../models/discounted-product';
import FeaturedProductsViewModel from '../view-models/featured-products';
import ProductViewModel from '../view-models/product';

class HomeController {
  sitetitle: string = "Mary's e-commerce site";

  private readonly productService: IProductService;

  constructor(productService: IProductService = null) {
    this.index = this.index.bind(this);
    this.about = this.about.bind(this);
    if (productService === null) {
      throw new Error('HomeController: productService');
    }
    this.productService = productService;
  }

  async index(req: express.Request, res: express.Response) {
    // const isPreferredCustomer: boolean = !!req.user && req.user.isInRole('PreferredCustomer');

    const products: Array<DiscountedProduct> = await this.productService.getFeaturedProducts(
      // isPreferredCustomer,
      req.user || { isInRole: (r: string) => false },
    );
    const productsViewModels = products.map((p) => new ProductViewModel(p.name, p.unitPrice));
    const featuredProductsViewModel = new FeaturedProductsViewModel(productsViewModels);

    return res.render('home', {
      sitetitle: this.sitetitle,
      pagetitle: 'Home',
      ...featuredProductsViewModel,
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
