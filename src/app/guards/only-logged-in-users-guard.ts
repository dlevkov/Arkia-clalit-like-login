import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';


@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {

  constructor(private userService: UsersService) {
  }

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('guard activated on:', this.userService.currentUser);
    return true;
    // return this.userService.isLoggedIn();
  }
}

