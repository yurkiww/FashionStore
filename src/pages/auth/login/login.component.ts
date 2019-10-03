import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { login } from 'src/store/actions//user.actions';
import { AppState } from 'src/store/reducers/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  inputTypePassword = 'password';
  loginForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      remember: [false],
    });
  }

  public loginUser = () => {
    this.store.dispatch(
      login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        remember: this.loginForm.value.remember,
      })
    );
  };

  showPassword() {
    this.inputTypePassword = 'text';
  }
  hidePassword() {
    this.inputTypePassword = 'password';
  }
  isFieldValid = (filedName: string) => {
    return (
      this.loginForm.get(filedName).invalid &&
      this.loginForm.get(filedName).touched
    );
  };
}
