import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IProductItem } from 'src/interfaces/product-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() item: IProductItem;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  visible: boolean = false;
  onItem = () => {
    this.visible = !this.visible;
    this.visible ? this.open.emit(null) : this.close.emit(null);
  };
  constructor() {}

  ngOnInit() {}
}
