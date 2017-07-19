import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { isNull, isNullOrUndefined } from 'util';
import { LoggedUser } from '../models/logged-user.model';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {
  private users: LoggedUser[] =
  [
    { id: '313948838', password: '12345678', LoggedIn: false, firstName: 'Denis', lastName: 'Levkov', eMail: 'dlevkov@gmail.com' },
    { id: '123456782', password: '12345687', LoggedIn: false, firstName: 'Rob', lastName: 'Bot', eMail: 'someone@somewhere.com' }
  ];
  public currentUser: UserModel | null;

  public isLoggedIn(): boolean {
    return !isNullOrUndefined(this.currentUser);
  }
  public logOut() {
    this.currentUser = null;
  }

  public addUser(user: UserModel) {
    const tmpUser = new LoggedUser(user);
    this.users.push(tmpUser);
  }

  public getUsers(): Observable<UserModel[]> {
    return Observable.of(this.users);
  }

  public updateUser(user: UserModel) {
    // tslint:disable-next-line:triple-equals
    const index = this.users.findIndex(us => us.id == user.id);
    this.users[index] = new LoggedUser(user);
  }
  public deleteUser(userId: string) {
    // tslint:disable-next-line:triple-equals
    this.users = this.users.filter(us => us.id != userId);
  }
  logIn(user: UserModel): void {
    // tslint:disable-next-line:triple-equals
    const index = this.users.findIndex(us => us.id == user.id);
    this.users[index].LoggedIn = true;
    this.currentUser = this.users[index];
  }

  tryLogIn(id: string, password: string): boolean {
    console.log('try login with', id, password);
    const foundUser = this.getUserById(id);
    console.log('user:', foundUser);
    if (isNullOrUndefined(foundUser)) {
      return false;
    }
    if (foundUser.password.toLocaleLowerCase() === password.toLocaleLowerCase()) {
      this.logIn(foundUser);
      return true;
    }
    return false;
  }
  private getUserById(id: string): LoggedUser {
    console.log('get user by id with:', id);
    console.log('users:', this.users);
    // tslint:disable-next-line:triple-equals
    return this.users.filter(user => user.id == id)[0];
  }
}
