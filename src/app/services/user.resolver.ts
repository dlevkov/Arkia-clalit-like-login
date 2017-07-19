import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { UsersService } from './users.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class UserResolver implements Resolve<UserModel> {
  constructor(private service: UsersService) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<UserModel> {
    const id: string = route.params['id'];
    return this.service.getUserById(id);
  }
}
