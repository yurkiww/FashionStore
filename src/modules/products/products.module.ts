import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/pages/products/products.component';
import { Route, RouterModule, Router } from '@angular/router';
import { ProductItemModule } from '../product-item/product-item.module';
import { SearchBoxModule } from '../search-box/search-box.module';
import { ProductDetailComponent } from 'src/pages/product-detail/product-detail.component';
import { ProductDetailModule } from '../product-detail/product-detail.module';
import { ItemBottomSectionModule } from '../item-bottom-section/item-bottom-section.module';

const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent,
  },

  {
    path: 'info',
    component: ProductDetailComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: () =>
    //       import('../item-bottom-section/item-bottom-section.module').then(
    //         (m) => m.ItemBottomSectionModule
    //       ),
    //   },
    // ],
  },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductItemModule,
    ProductDetailModule,
    SearchBoxModule,
    ItemBottomSectionModule,
  ],
  exports: [RouterModule],
})
export class ProductsModule {}
