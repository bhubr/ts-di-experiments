import IProductRepository from '../repositories/iproductrepository';
import IUserContext from '../models/iuser';
import DiscountedProduct from '../models/discounted-product';
import IProductService from './iproduct';

export default class ProductService implements IProductService {
  private readonly repository: IProductRepository;

  // private readonly userContext: IUserContext;

  constructor(
    repository: IProductRepository = null,
    // userContext: IUserContext = null,
  ) {
    if (repository === null) {
      throw new Error('ProductService repository');
    }
    // if (userContext === null) {
    //   throw new Error('ProductService userContext');
    // }
    this.repository = repository;
    // this.userContext = userContext;
  }

  async getFeaturedProducts(userContext: IUserContext): Promise<Array<DiscountedProduct>> {
    const rawProducts = await this.repository.getFeaturedProducts();
    return rawProducts.map(
      (p) => p.applyDiscountFor(userContext),
    );
  }
}
