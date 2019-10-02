import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IPriceDetails } from 'src/interfaces/cart-price-details';

@Component({
  selector: 'app-cart-price-details',
  templateUrl: './cart-price-details.component.html',
  styleUrls: ['./cart-price-details.component.scss'],
})
export class CartPriceDetailsComponent implements OnInit {
  @Input() price: IPriceDetails;
  @Input() total: number;

  @Output() OnOpen = new EventEmitter();
  @Output() OnClose = new EventEmitter();
  visible = false;

  private element: any;
  constructor() {}
  openModal = () => {
    this.visible = !this.visible;
    this.visible ? this.OnOpen.emit() : this.OnClose.emit();
  };
  closeModal() {
    this.element.style.display = 'none';
    //document.body.classList.remove('jw-modal-open');
  }

  ngOnInit() {}
}
