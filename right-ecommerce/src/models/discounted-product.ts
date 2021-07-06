export default class DiscountedProduct {
  public name: string;

  public unitPrice: number;

  constructor(name: string, unitPrice: number) {
    if (name === undefined) {
      throw new Error('DiscountedProduct name');
    }
    this.name = name;
    this.unitPrice = unitPrice;
  }
}
