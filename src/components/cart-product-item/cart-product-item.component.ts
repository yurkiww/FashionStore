import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICartProductItem } from 'src/interfaces/cart-product-item';
import { CartService } from 'src/services/cart.service';
import { IProduct } from 'src/interfaces/products.interface';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss'],
})
export class CartProductItemComponent implements OnInit {
  @Input() item: IProduct;
  @Output() onChanged = new EventEmitter();
  @Output() deleteFromCart = new EventEmitter();
  products: ICartProductItem[] = [];
  selectedOption = 1;
  constructor() {}

  sum: number = 0;
  onChange() {
    this.sum = this.item.basicPrice * this.item.quantity;
    this.onChanged.emit(this.sum);
  }

  removeItem() {
    this.deleteFromCart.emit(this.item);
  }

  ngOnInit() {
    this.onChange();
  }
}
