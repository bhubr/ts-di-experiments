import Product from '../models/product';
import Db from '../db';

export default class ProductService {
  private db: Db;

  constructor() {
    this.db = new Db();
  }

  async getFeaturedProducts(isCustomerPreferred: boolean): Promise<Array<Product>> {
    const rawProducts = await this.db.getProducts();
    const discount = isCustomerPreferred ? .95 : 1;
    const products: Array<Product> = rawProducts.map((row) => {
      const product = new Product();
      product.id = row.id;
      product.name = row.name;
      product.description = row.description;
      product.unitPrice = row.unitPrice * discount;
      product.isFeatured = row.isFeatured;
      return product;
    });
    return products;
  }
}
