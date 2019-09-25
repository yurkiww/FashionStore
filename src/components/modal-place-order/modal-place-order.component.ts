import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-place-order',
  templateUrl: './modal-place-order.component.html',
  styleUrls: ['./modal-place-order.component.scss'],
})
export class ModalPlaceOrderComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
