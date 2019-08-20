import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardLayoutModule } from '../dashboard-layout/dashboard-layout.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild([]), DashboardLayoutModule],
})
export class DashboardModule {}
