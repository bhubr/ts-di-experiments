import DiscountedProduct from './discounted-product';
import IUserContext from './iuser';

enum Role {
  PreferredCustomer = 'PreferredCustomer',
  RegularCustomer = 'RegularCustomer',
}

export default class Product {
  /**
   * Product id
   */
  public id: number;

  /**
   * Product name
   */
  public name: string;

  /**
   * Product description
   */
  public description: string;

  /**
   * Product's unit price
   */
  public unitPrice: number;

  /**
   * Product featured attribute
   */
  public isFeatured: boolean;

  public applyDiscountFor(user: IUserContext): DiscountedProduct {
    const preferred: boolean = user.isInRole(Role.PreferredCustomer);
    const discount: number = preferred ? 0.95 : 1.0;
    return new DiscountedProduct(this.name, this.unitPrice * discount);
  }
}
