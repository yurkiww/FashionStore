import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/services/user.service';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  providers: [UserService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
  ],
})
export class AuthModule {}
