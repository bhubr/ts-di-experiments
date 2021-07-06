import * as Sqlite3 from 'sqlite3';
import * as path from 'path';
import Product from './models/product';

const sqlite3 = Sqlite3.verbose();
const dbFile = path.resolve(__dirname, '..', 'sqlite.db');
const db = new sqlite3.Database(dbFile);

export default class Db {
  async getProducts(): Promise<Array<any>> {
    return new Promise<Array<any>>((resolve, reject) => {
      db.serialize(() => {
        db.all('SELECT rowid AS id, name, unitPrice, isFeatured FROM product WHERE isFeatured = 1', (err, rows) => {
          resolve(rows);
        });
      });
    });
  }
}
