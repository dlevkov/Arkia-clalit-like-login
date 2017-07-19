import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'dl-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: UserModel[];

  constructor(private _service: UsersService) { }

  ngOnInit() {
    this.users = this._service.users;
  }


}
