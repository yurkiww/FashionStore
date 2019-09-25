import { Component, OnInit, Input } from '@angular/core';
import { IPriceDetails } from 'src/interfaces/cart-price-details';

@Component({
  selector: 'app-cart-price-details',
  templateUrl: './cart-price-details.component.html',
  styleUrls: ['./cart-price-details.component.scss'],
})
export class CartPriceDetailsComponent implements OnInit {
  @Input() price: IPriceDetails;
  @Input() total: number;
  constructor() {}

  ngOnInit() {}
}
