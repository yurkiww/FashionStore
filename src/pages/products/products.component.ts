import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interfaces/product.interface';
import { Store } from '@ngrx/store';
import { getProducts } from 'src/store/actions/product.actions';
import { AppState } from 'src/store/reducers/index';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select('products').subscribe((red) => {
      this.products = red.products;
    });
  }
  ngOnInit() {
    this.store.dispatch(getProducts());
  }
}
