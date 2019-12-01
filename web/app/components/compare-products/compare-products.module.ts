import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CompareProductsComponent } from './compare-products.component';
import { ProductCardModule } from '../card/products-cards/product-card/product-card.module';

@NgModule({
  declarations: [
    CompareProductsComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ProductCardModule,
    RouterModule.forChild([{
      path: '',
      component: CompareProductsComponent
    }]),
      CarouselModule.forRoot(),
      AccordionModule.forRoot()
  ],
  exports: [CompareProductsComponent]
})
export class CompareProductsModule {}
