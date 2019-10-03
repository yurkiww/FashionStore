import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IPriceDetails } from 'src/interfaces/cart-price-details';
import { IProduct } from 'src/interfaces/products.interface';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productItems: IProduct[] = [];
  //cartPrices: Array<IPriceDetails> = [];

  constructor(private cartService: CartService) {
    this.productItems = cartService.getOption();
  }

  deleteFromCart = (product: IProduct) => {
    const index = this.productItems.findIndex((pr) => {
      return product.brandName === pr.brandName;
    });
    if (index >= 0) {
      this.productItems.splice(index, 1);
    }
  };
  sum: number = 0;

  receiveSum(event) {
    this.sum += event;
  }

  cartPrices: Array<IPriceDetails> = [
    {
      bagTotal: 0,
      bagDiscount: 0,
      orderTotal: 0,
      delivery: 'FREE',
      total: 0,
    },
  ];

  ngOnInit() {
    this.productItems = this.cartService.getOption();
    console.log(this.productItems);
    console.log(this.cartService.getOption());
  }
}
