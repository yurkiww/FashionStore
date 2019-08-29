import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from 'src/components/product-item/product-item.component';
import { SearchBoxComponent } from 'src/components/search-box/search-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductItemComponent, SearchBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProductItemComponent, SearchBoxComponent],
})
export class ComponentsModule {}
