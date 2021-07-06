import IProductRepository from './iproductrepository';
import Product from '../models/product';
import Db from '../db';

export default class SQLProductRepository implements IProductRepository {
  // Should be an interface too?
  private db: Db;

  constructor(db: Db = null) {
    if (db === null) {
      throw new Error('SQLProductRepository db');
    }
    this.db = db;
  }

  async getFeaturedProducts(): Promise<Array<Product>> {
    const rawProducts = await this.db.getProducts();
    return rawProducts.map((row) => {
      const product = new Product();
      product.id = row.id;
      product.name = row.name;
      product.description = row.description;
      product.unitPrice = row.unitPrice;
      product.isFeatured = row.isFeatured;
      return product;
    });
  }
}
