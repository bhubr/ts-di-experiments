import Product from '../models/product';
import Db from '../db';

export default class ProductService {
  private db: Db;

  constructor() {
    this.db = new Db();
  }

  async getFeaturedProducts(isCustomerPreferred: boolean): Promise<Array<Product>> {
    return this.db.getProducts(isCustomerPreferred);
  }
}
