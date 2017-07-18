import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';


@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivateChild {

  constructor(private userService: UsersService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.userService.isLoggedIn();
  }
}
