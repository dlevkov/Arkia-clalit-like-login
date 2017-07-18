import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { LoginValidators, idLegalityValidator, passwordLegalityValidator } from './login-validators';
@Component({
  selector: 'dl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private users: UsersService) { }

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
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),
      ]), passwordLegalityValidator]
    });
  }
  onSubmit() {
    const currentUser = new UserModel();
    currentUser.id = this.loginForm.value('id');
    currentUser.password = this.loginForm.value('password');
    const result = this.users.tryLogIn(currentUser.id, currentUser.password);
  }
}
