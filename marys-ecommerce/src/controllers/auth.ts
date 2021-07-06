import * as express from 'express';
import User from '../models/user';

class AuthController {
  private users: Array<User>;

  constructor() {
    this.loginAs = this.loginAs.bind(this);
    this.users = [
      new User('mary', true),
      new User('guest', false),
    ];
  }

  loginAs(req: express.Request, res: express.Response) {
    const { username } = req.query;
    const user = this.users.find((u) => u.username === username);
    if (!user) {
      return res.status(404).send(`User '${username}' does not exist.`);
    }
    req.session.user = {
      username: user.username,
      isPreferred: user.isInRole('PreferredCustomer'),
    };
    return res.redirect('/');
  }

  logout(req: express.Request, res: express.Response) {
    delete req.session.user;
    return res.redirect('/');
  }
}

export default AuthController;
