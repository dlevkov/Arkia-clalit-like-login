import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { isNull } from 'util';
import { LoggedUser } from '../models/logged-user.model';

@Injectable()
export class UsersService {
  users: LoggedUser[];
  public currentUser: UserModel | null;

  public isLoggedIn(): boolean {
    return !isNull(this.currentUser);
  }
  public logOut() {
    this.currentUser = null;
  }
  logIn(user: UserModel): void {
    const index = this.users.findIndex(us => us.id === user.id);
    this.users[index].LoggedIn = true;
    this.currentUser = this.users[index];
  }

  tryLogIn(id: string, password: string): boolean {
    const foundUser = this.getUserById(id);
    if (foundUser.password === password) {
      this.logIn(foundUser);
      return true;
    }
    return false;
  }
  private getUserById(id: string): LoggedUser {
    return this.users.find(user => user.id === id);
  }
}
