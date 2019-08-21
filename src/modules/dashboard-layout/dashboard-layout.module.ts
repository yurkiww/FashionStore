import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { ModalModule } from '../modal/modal.module';
import { FormsModule } from '@angular/forms';
import { SearchBoxModule } from '../search-box/search-box.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [CommonModule, ModalModule, RouterModule, SearchBoxModule, FormsModule],
  exports: [SidebarComponent, HeaderComponent],
})
export class DashboardLayoutModule {}
