import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from 'src/components/account-settings/account-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { UserResolver } from 'src/resolvers/user.resolver';

const routes: Route[] = [
  {
    path: '',
    component: AccountSettingsComponent,
    resolve: { user: UserResolver },
  },
];
@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  providers: [UserService, UserResolver],
})
export class AccountSettingsModule {}
