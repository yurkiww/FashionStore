import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from 'src/modules/products/products.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { AccountSettingsModule } from 'src/modules/account-settings/account-settings.module';
import { LayoutModule } from 'src/modules/header/layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    ProductsModule,
    AccountSettingsModule
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
