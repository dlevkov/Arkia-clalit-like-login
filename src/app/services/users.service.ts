import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { isNull, isNullOrUndefined } from 'util';
import { LoggedUser } from '../models/logged-user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UsersService {
  users: LoggedUser[] =
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

  public addUser(user: UserModel): Observable<UserModel> {
    const tmpUser = new LoggedUser(user);
    this.users.push(tmpUser);
    return Observable.of(this._getUserById(user.id));
  }

  public getUsers(): Observable<LoggedUser[]> {
    return Observable.of(this.users);
  }

  public getUserById(id: string): Observable<LoggedUser> {
    return Observable.of(this._getUserById(id));
  }

  public updateUser(user: UserModel): Observable<UserModel> {
    console.log('update on:', user);
    // tslint:disable-next-line:triple-equals
    const index = this.users.findIndex(us => us.id == user.id);
    console.log('index on:', index);
    this.users[index] = new LoggedUser(user);
    return Observable.of(this._getUserById(user.id));
  }

  public deleteUser(userId: string): Observable<UserModel> {
    console.log('delete on:', userId);
    console.log('users before:', this.users.length);
    // tslint:disable-next-line:triple-equals
    const index = this.users.findIndex(us => us.id == userId);
    this.users.splice(index, 1);
    console.log('users after:', this.users.length);
    return Observable.of(null);
  }

  logIn(user: UserModel): void {
    // tslint:disable-next-line:triple-equals
    const index = this.users.findIndex(us => us.id == user.id);
    this.users[index].LoggedIn = true;
    this.currentUser = this.users[index];
  }

  tryLogIn(id: string, password: string): boolean {
    console.log('try login with', id, password);
    const foundUser = this._getUserById(id);
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

  private _getUserById(id: string): LoggedUser {
    console.log('get user by id with:', id);
    console.log('users:', this.users);
    // tslint:disable-next-line:triple-equals
    return this.users.find(user => user.id == id);
  }
}
