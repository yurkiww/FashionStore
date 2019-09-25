import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICartProductItem } from 'src/interfaces/cart-product-item';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss'],
})
export class CartProductItemComponent implements OnInit {
  @Input() item: ICartProductItem;
  @Output() OnChanged = new EventEmitter();

  selectedOption = 1;
  constructor() {}
  sum: number;
  onChange(): number {
    this.sum = 0;
    this.sum = this.item.price * this.selectedOption;
    return this.sum;
  }

  sendSum() {
    this.OnChanged.emit(this.onChange());
  }
  removeItem() {}
  ngOnInit() {
    this.sendSum();
  }
}
