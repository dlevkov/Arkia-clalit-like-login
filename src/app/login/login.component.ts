import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { LoginValidators, idLegalityValidator, passwordLegalityValidator } from './login-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'dl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private users: UsersService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      id: ['', Validators.compose(
        [
          Validators.required,
          idLegalityValidator
        ]
      )],
      password: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ]
      ), passwordLegalityValidator]
    });
  }
  onSubmit() {
    const currentUser = new UserModel();
    currentUser.id = this.loginForm.controls['id'].value;
    currentUser.password = this.loginForm.controls['password'].value;

    console.log('submit with:', currentUser);

    const result = this.users.tryLogIn(currentUser.id, currentUser.password);
    if (result) {
      this.router.navigate(['/users']);
    } else {
      this.loginForm.setErrors({ 'submitError': true });
    }
  }
  private clearForm() {
    this.createForm();
  }
}
