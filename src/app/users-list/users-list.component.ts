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

  public navigateToEditUser(userId: string) {
    this.router.navigate(['user', userId]);
  }
  public deleteUserById(userId: string) {
    this._service.deleteUser(userId);
  }

  ngOnInit() {
    this._subscriber = this._service.getUsers()
      .subscribe(
      (x: UserModel) => {
        console.log('onNext:', x);
        this.users.push(x);
      },
      e => console.log('onError: %s', e),
      () => console.log('onCompleted')
      );
  }
  ngOnDestroy(): void {
    this._subscriber.unsubscribe();
  }
  navigateToAdd() {
    this.router.navigate(['user']);
  }

}
