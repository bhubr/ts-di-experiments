// import '@formatjs/intl-numberformat/polyfill';

export default class ProductViewModel {
  formatter: Intl.NumberFormat = new Intl.NumberFormat(
    'en-US', { style: 'currency', currency: 'USD' },
  );

  summaryText: string;

  constructor(name: string, unitPrice: number) {
    this.summaryText = `${name} (${this.formatter.format(unitPrice)})`;
  }
}
