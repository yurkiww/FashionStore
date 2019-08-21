import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/pages/products/products.component';
import { Route, RouterModule } from '@angular/router';
import { ProductItemModule } from '../product-item/product-item.module';
import { SearchBoxModule } from '../search-box/search-box.module';

const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ProductItemModule, SearchBoxModule],
})
export class ProductsModule { }
