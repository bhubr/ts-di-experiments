import ProductViewModel from './product';

export default class FeaturedProductsViewModel {
  public products: Array<ProductViewModel>;

  constructor(products: Array<ProductViewModel>) {
    this.products = products;
  }
}
