import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductsActions from './store/products.actions';
import * as ProductsSelectors from './store/products.selector';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  private store = inject(Store);

  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  private productsLoaded = false;

  constructor() {
    this.products$ = this.store.select(ProductsSelectors.selectAllProducts);
    this.loading$ = this.store.select(ProductsSelectors.selectProductsLoading);
    this.error$ = this.store.select(ProductsSelectors.selectProductsError);
  }

  loadProducts() {
    if (!this.productsLoaded) {
      this.store.dispatch(ProductsActions.loadProducts());
      this.productsLoaded = true;
    }
  }
}
