export default class User {
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
