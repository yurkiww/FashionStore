import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [CommonModule, ModalModule],
  exports: [SidebarComponent, HeaderComponent],
})
export class DashboardLayoutModule {}
