import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardLayoutModule } from '../dashboard-layout/dashboard-layout.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    DashboardLayoutModule,
    AppRoutingModule,
  ],
})
export class DashboardModule {}
