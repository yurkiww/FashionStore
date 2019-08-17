import { Component, OnInit } from '@angular/core';
import { IProductItem } from 'src/interfaces/product-item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productItems: Array<IProductItem> = [
    {
      name: 'Harvard',
      description: 'Men Slim Fit Casual Shirt',
      size: ['S', 'M', 'L'],
      price: 1999,
      discount: 30,
      reducedPrice: 1399,
      img:
        'https://5.imimg.com/data5/ST/PE/MY-47609367/stylish-slim-fit-casual-shirt-500x500.jpg',
    },
    {
      name: 'Oxford',
      description: 'Men Slim Fit Casual Shirt',
      size: ['S', 'L'],
      price: 1999,
      discount: 50,
      reducedPrice: 999,
      img:
        'https://s3-us-west-2.amazonaws.com/ebay94582/ebt/images/YW92993/5.jpg',
    },
    {
      name: 'TOMMY HILFIGER',
      description: 'Men Analogue Watch',
      size: ['S'],
      price: 7250,
      discount: 50,
      reducedPrice: 3625,
      img:
        'https://www.brandfield.com/media/catalog/product/cache/image/9df78eab33525d08d6e5fb8d27136e95/t/h/th1791464.jpg',
    },
    {
      name: 'PANIT',
      description: 'Women Regular Trousers',
      size: ['S', 'M', 'L'],
      price: 1399,
      discount: 60,
      reducedPrice: 559,
      img:
        'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/6993400/2018/7/30/b3d5f951-1149-4217-81a9-f50cb646fa3f1532928738800-PANIT-Women-Trousers-6611532928738642-1.jpg',
    },
  ];
  constructor() {}
  ngOnInit() {}
}
