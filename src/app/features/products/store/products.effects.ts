import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MockProductsService } from '../../../core/services/mock-products';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productsService = inject(MockProductsService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => ProductsActions.loadProductsSuccess({ products })),
          catchError((error) => {
            console.error('Error loading products:', error);
            return of(ProductsActions.loadProductsFailure({ error }));
          })
        )
      )
    )
  );

  constructor() {}
}
