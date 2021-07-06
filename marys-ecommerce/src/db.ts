import * as Sqlite3 from 'sqlite3';
import Product from './models/product';

const sqlite3 = Sqlite3.verbose();
const db = new sqlite3.Database(':memory:');

function genPrice(): number {
  return Math.round(50 * (1 + Math.random())) / 10;
}

function genIsFeatured(): number {
  return (Math.random() > 0.5) ? 1 : 0;
}

export default class Db {
  constructor() {
    db.serialize(() => {
      db.run('CREATE TABLE product (name TEXT, description TEXT, unitPrice REAL, isFeatured BOOLEAN)');

      const stmt = db.prepare('INSERT INTO product VALUES (?, ?, ?, ?)');
      for (let i = 0; i < 10; i += 1) {
        stmt.run(`Product ${i}`, `Description ${i}`, genPrice(), genIsFeatured());
      }
      stmt.finalize();
    });
  }

  async getProducts(isFeatured: boolean): Promise<Array<Product>> {
    return new Promise<Array<Product>>((resolve, reject) => {
      db.serialize(() => {
        const featInt = isFeatured ? 1 : 0;
        db.all(`SELECT rowid AS id, name, unitPrice, isFeatured FROM product WHERE isFeatured = ${featInt}`, (err, rows) => {
          resolve(rows);
        });
      });
    });
  }
}
