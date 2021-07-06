import * as express from 'express';
import User from '../models/user';

export default (req: express.Request, res: express.Response, next: Function) => {
  const { user } = req.session;
  if (user) {
    req.user = new User(user.username, user.isPreferred);
  }
  next();
};
