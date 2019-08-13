import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from 'src/pages/account-settings/account-settings.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AccountSettingsModule {}
