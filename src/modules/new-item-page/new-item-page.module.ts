import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemPageComponent } from 'src/pages/products/new-item-page/new-item-page.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserResolver } from 'src/resolvers/user.resolver';
import { UserService } from 'src/services/user.service';

const routes: Route[] = [
  {
    path: '',
    component: NewItemPageComponent,
    resolve: { user: UserResolver },
  },
];

@NgModule({
  declarations: [NewItemPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [NewItemPageComponent],
  providers: [UserService, UserResolver],
})
export class NewItemPageModule {}
