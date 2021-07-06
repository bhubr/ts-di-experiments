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

  constructor(id, name, description, isFeatured, unitPrice) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.isFeatured = isFeatured;
    this.unitPrice = unitPrice;
  }
}
