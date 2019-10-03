import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {
  // LogUser,
  // GetUsersSuccess,
  // GetUsers,
  register,
} from 'src/store/actions//user.actions';
import { AppState } from 'src/store/reducers/index';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      passwordConfirm: ['', [Validators.minLength(8), Validators.required]],
    });
  }
  public registerUser = () => {
    // console.log(this.registerForm.value);
    this.store.dispatch(
      register({
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        city: 'default',
        state: 'default',
        zip: 'default',
        role: 'default',
      })
    );
  };
  isFieldValid = (filedName: string) => {
    return (
      this.registerForm.get(filedName).invalid &&
      this.registerForm.get(filedName).touched
    );
  };
  passwordConfirmation = () => {
    if (this.registerForm.value.password != '') {
      return (
        this.registerForm.value.password ==
        this.registerForm.value.passwordConfirm
      );
    }
    return false;
  };
}
