import DiscountedProduct from '../models/discounted-product';
import IUserContext from '../models/iuser';

export default interface IProductService {
  getFeaturedProducts(userContext: IUserContext): Promise<Array<DiscountedProduct>>
}
