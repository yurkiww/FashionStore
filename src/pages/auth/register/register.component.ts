import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {
  // LogUser,
  // GetUsersSuccess,
  // GetUsers,
  register,
} from 'src/store/actions//user.actions';
import { IAppState } from 'src/store/state/app.state';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private store: Store<IAppState>, private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.email],
      password: ['', Validators.minLength(8)],
      passwordConfirm: ['', Validators.minLength(8)],
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
}
