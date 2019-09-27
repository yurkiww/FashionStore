import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { login } from 'src/store/actions//user.actions';
import { IAppState } from 'src/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  inputTypePassword = 'password';
  loginForm: FormGroup;
  constructor(
    private store: Store<IAppState>,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      remember: [false],
    });

    this.userService
      .getUsers()
      .subscribe((res) => console.log(res), (err) => console.log(err));
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
}
