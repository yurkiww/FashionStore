import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartPriceDetailsComponent } from '../cart-price-details/cart-price-details.component';
import { StorageService } from 'src/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-place-order',
  templateUrl: './modal-place-order.component.html',
  styleUrls: ['./modal-place-order.component.scss'],
})
export class ModalPlaceOrderComponent implements OnInit {
  constructor(private storageService: StorageService) {}
  closeModal() {
    this.storageService.deleteToken();
  }
  ngOnInit() {}
}
