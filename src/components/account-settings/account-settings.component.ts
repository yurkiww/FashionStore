import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  constructor() {}

  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      zip: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
      ]),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    console.log('Submitted', this.form);
  }

  isFieldValid = (filedName) => {
    return this.form.get(filedName).invalid && this.form.get(filedName).touched;
  };
}
