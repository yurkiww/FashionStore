import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from 'src/components/product-item/product-item.component';
import { SearchBoxComponent } from 'src/components/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/components/pagination/pagination.component';

@NgModule({
  declarations: [ProductItemComponent, SearchBoxComponent,PaginationComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProductItemComponent, SearchBoxComponent,PaginationComponent],
})
export class ComponentsModule {}
