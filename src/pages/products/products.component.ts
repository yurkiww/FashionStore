import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IProductItem } from 'src/interfaces/product-item';
import { IPagination } from 'src/interfaces/pagination';
import { CartService } from 'src/services/cart.service';
import { ProductsService } from 'src/services/products.service';
import { IProduct } from 'src/interfaces/products.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  id: string;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  private getProducts() {
    this.productsService.getProducts().subscribe((res) => {
      this.products = res;
      console.log(res);
    });
  }
  onPageChanged(e: IPagination) {
    console.log(e);
  }
  ngOnInit() {
    this.getProducts();
  }
}
