import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductItem } from 'src/interfaces/product-item';
import { IProduct } from 'src/interfaces/products.interface';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() item: IProduct;
  image: string;
  productImage: any;
  constructor(private productService: ProductService) {}
  @Output() addToCart = new EventEmitter();
  addToCartHandler = () => {
    this.addToCart.emit(this.item);
  };
  ngOnInit() {
    this.productService.getAllImages().subscribe((res) => {
      this.productImage = res.find((x) => x.id == this.item.id);
      // console.log(this.productImage.imageURL);
      // this.productService
      //   .getImage(this.productImage.imageURL)
      //   .subscribe((res) => console.log(res));
    });
  }
}
