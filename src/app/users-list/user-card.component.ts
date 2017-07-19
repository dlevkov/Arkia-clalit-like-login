import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'dl-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: UserModel;
  @Output() editUser = new EventEmitter<string>();
  @Output() deleteUser = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  editMe() {
    this.editUser.emit(this.user.id);
  }
  deleteMe() {
    this.deleteUser.emit(this.user.id);
  }
}
