import { Injectable } from '@angular/core';
import { IProduct } from 'src/interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: IProduct[];

  constructor() {
    this.products = [];
  }
  public setOption(option) {
    this.products.push(option);
  }

  public getOption(): IProduct[] {
    return this.products;
  }
}
