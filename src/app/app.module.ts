import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from 'src/modules/products/products.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { ModalModule } from 'src/modules/modal/modal.module';
import { DashboardLayoutModule } from 'src/modules/dashboard-layout/dashboard-layout.module';
import { AccountSettingsModule } from 'src/modules/account-settings/account-settings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    ProductsModule,
    ModalModule,
    DashboardLayoutModule,
    AccountSettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
