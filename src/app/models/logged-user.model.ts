import { UserModel } from './user.model';

export class LoggedUser extends UserModel {
  LoggedIn = false;

  constructor(user?: UserModel) {
    super(user.id, user.password, user.firstName, user.lastName, user.eMail);
    this.LoggedIn = false;
  }
}
