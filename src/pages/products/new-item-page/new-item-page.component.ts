import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/services/product.service';
import { IUser } from 'src/interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styleUrls: ['./new-item-page.component.scss'],
})
export class NewItemPageComponent implements OnInit {
  currentUser: IUser;
  newItemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentUser = this.route.snapshot.data.user;
    console.log(this.currentUser);
    this.newItemForm = this.fb.group({
      name: ['', Validators.required],
      brandName: ['', Validators.required],
      basicPrice: ['', Validators.required],
      cloth: ['', Validators.required],
      sizes: ['', Validators.required],
      colors: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],
    });
  }
  public addItem = () => {
    console.log(this.newItemForm.value);
    this.productService
      .createNewProduct(
        this.newItemForm.value.name,
        this.newItemForm.value.brandName,
        this.newItemForm.value.basicPrice,
        this.newItemForm.value.description,
        this.newItemForm.value.cloth,
        10,
        this.currentUser.id,
        'shirt',
        [' ']
      )
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['products']);
      });
  };
  isFieldValid = (filedName: string) => {
    return (
      this.newItemForm.get(filedName).invalid &&
      this.newItemForm.get(filedName).touched
    );
  };
}
