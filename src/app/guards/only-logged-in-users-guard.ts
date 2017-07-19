import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';


@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {

  constructor(private userService: UsersService, private _router: Router) {
  }

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('guard activated on:', this.userService.currentUser);

    if (!this.userService.isLoggedIn()) {
      this._router.navigate(['404']);
      return false;
    }
    return true;
  }
}

