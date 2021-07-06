import Product from '../models/product';

export default interface IProductRepository {
  getFeaturedProducts(): Promise<Array<Product>>;
}
