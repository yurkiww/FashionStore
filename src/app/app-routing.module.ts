import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { ModalComponent } from 'src/pages/modal/modal.component';
import { AccountSettingsComponent } from 'src/pages/account-settings/account-settings.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'store',
    component: SidebarComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  {
    path: 'account',
    component: AccountSettingsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('src/modules/products/products.module').then(
            (m) => m.ProductsModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
