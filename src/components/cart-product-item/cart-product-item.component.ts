import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICartProductItem } from 'src/interfaces/cart-product-item';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss'],
})
export class CartProductItemComponent implements OnInit {
  @Input() item: ICartProductItem;
  selectedOption: number = 1;
  constructor() {}
  sum: number;
  onChange() {
    this.sum = 0;
    this.sum = this.item.price * this.selectedOption;
    return this.sum;
  }
  @Output() onChanged = new EventEmitter<number>();

  sendSum() {
    this.onChanged.emit(this.onChange());
  }
  removeItem() {}
  ngOnInit() {
    this.sendSum();
  }
}
