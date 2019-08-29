import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from 'src/pages/product-detail/product-detail.component';
import { ItemBottomSectionComponent } from 'src/components/item-bottom-section/item-bottom-section.component';
import { ItemBottomSectionModule } from '../item-bottom-section/item-bottom-section.module';
import { Route, RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ItemBottomSectionModule],
  exports: [ProductDetailComponent, ItemBottomSectionModule],
})
export class ProductDetailModule {}
