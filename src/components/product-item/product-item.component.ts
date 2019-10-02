import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductItem } from 'src/interfaces/product-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() item: IProductItem;

  constructor() { }

  @Output() addToCart = new EventEmitter();
  addToCartHandler=()=>{
    this.addToCart.emit(this.item);
  }
  ngOnInit() { }
}
