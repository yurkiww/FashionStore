import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/pages/products/products.component';
import { Route, RouterModule, Router } from '@angular/router';

import { ProductDetailComponent } from 'src/pages/product-detail/product-detail.component';
import { ProductDetailModule } from '../product-detail/product-detail.module';
import { ItemBottomSectionModule } from '../item-bottom-section/item-bottom-section.module';
import { ComponentsModule } from '../components/components.module';

const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent
  },

  {
    path: 'info',
    component: ProductDetailComponent
  }
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductDetailModule,
    ItemBottomSectionModule,
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class ProductsModule {}
