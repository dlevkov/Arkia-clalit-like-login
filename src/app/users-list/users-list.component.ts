import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'dl-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  users: UserModel[] = [];
  private _subscriber: Subscription;
  constructor(private _service: UsersService, private router: Router) { }

  ngOnInit() {
    this._subscriber = this._service.getUsers()
      .distinctUntilChanged()
      .subscribe(users => {
        this.users.push(...users);
      });
  }
  ngOnDestroy(): void {
    this._subscriber.unsubscribe();
  }
  navigateToAdd() {
    this.router.navigate(['user']);
  }
  navigateToEditUser(userId: string) {
    this.router.navigate(['user', userId]);
  }
  deleteUserById(userId: string) {
    this._service.deleteUser(userId);
  }
}
