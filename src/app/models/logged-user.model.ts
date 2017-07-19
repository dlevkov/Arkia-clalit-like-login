import { UserModel } from './user.model';

export class LoggedUser extends UserModel {
  LoggedIn = false;

  constructor(user?: UserModel) {
    super();
    this.LoggedIn = false;
  }
}
