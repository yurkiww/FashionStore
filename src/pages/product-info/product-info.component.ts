import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/services/products.service';
import { IProduct } from 'src/interfaces/products.interface';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  product: IProduct[] = [];
  currentProduct: IProduct[];
  id: number;
  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  onAddCart = () => {
    this.cartService.setOption(this.product);
    console.log(this.cartService.getOption());
  };

  private getCurrentProduct(id: number) {
    this.productsService.getCurrentProduct(id).subscribe((res) => {
      this.product = res;
      // console.log(this.product);
      // console.log(this.product[4]);
      // console.log(this.product[id].id);
    });
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.getCurrentProduct(this.id);
  }
}
