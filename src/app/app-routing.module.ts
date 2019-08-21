import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { ModalComponent } from 'src/components/modal/modal.component';
import { AccountSettingsComponent } from 'src/components/account-settings/account-settings.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('src/modules/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('src/modules/account-settings/account-settings.module').then(
            (m) => m.AccountSettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
