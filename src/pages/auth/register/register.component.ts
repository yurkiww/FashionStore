import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.email],
      password: ['', Validators.minLength(8)],
      passwordConfirm: ['', Validators.minLength(8)],
    });
  }
  registerUser = () => {
    console.log(this.registerForm.value);
  };
}
