import IUserContext from './iuser';

export default class User implements IUserContext {
  username: string;

  roles: Array<string>;

  constructor(username, isPreferred) {
    this.username = username;
    this.roles = isPreferred ? ['PreferredCustomer'] : [''];
  }

  isInRole(role: string): boolean {
    return this.roles.includes(role);
  }
}
