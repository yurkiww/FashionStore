import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from 'src/pages/cart/cart.component';
import { Route, RouterModule } from '@angular/router';
import { CartProductItemComponent } from 'src/components/cart-product-item/cart-product-item.component';
import { CartPriceDetailsComponent } from 'src/components/cart-price-details/cart-price-details.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [
    CartComponent,
    CartProductItemComponent,
    CartPriceDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [CartComponent, CartPriceDetailsComponent, CartProductItemComponent],
})
export class CartModule {}
