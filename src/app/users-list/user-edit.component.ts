import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserModel } from '../models/user.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'dl-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  private _routeSubscriber: Subscription;
  private _formSubscriber: Subscription;
  public _user: UserModel;
  public userForm: FormGroup;
  public formChanged = false;
  constructor(private _route: ActivatedRoute, private _router: Router, private _fb: FormBuilder, private _service: UsersService) { }

  public onSubmit() {
    const currentUser = new UserModel();
    currentUser.firstName = this.userForm.controls['fName'].value;
    currentUser.lastName = this.userForm.controls['lName'].value;
    currentUser.password = this.userForm.controls['password'].value;
    currentUser.eMail = this.userForm.controls['eMail'].value;
    currentUser.id = this._user.id;

    this._service.updateUser(currentUser).subscribe();
    this._user = currentUser;
    this.onCancel();
  }

  public onCancel() {
    this.formChanged = false;
    this._formSubscriber.unsubscribe();
    this.createForm();
  }
  public onBackToMain() {
    this._router.navigate(['/users']);
  }

  ngOnInit() {
    this._routeSubscriber = this._route.data.subscribe((data: { User: UserModel }) => {
      this._user = data.User;
    });
    this.createForm();
  }

  ngOnDestroy(): void {
    this._routeSubscriber.unsubscribe();
  }

  private createForm() {
    this.userForm = this._fb.group({
      id: [{ value: this._user.id, disabled: true }],
      password: [this._user.password],
      fName: [this._user.firstName],
      lName: [this._user.lastName],
      eMail: [this._user.eMail]
    });
    this._formSubscriber = this.userForm.valueChanges.subscribe((data: UserModel) => {
      console.log('Form changes', data);
      this.formChanged = true;
    });
  }

}
