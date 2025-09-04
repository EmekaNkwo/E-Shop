import { Routes } from '@angular/router';
import { ProductsPageComponent } from './containers/products-page/products-page';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
    title: 'Products',
  },
];
