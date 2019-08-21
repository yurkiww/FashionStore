import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IProductItem } from 'src/interfaces/product-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() item: IProductItem;

  constructor() {}

  ngOnInit() {}
}
