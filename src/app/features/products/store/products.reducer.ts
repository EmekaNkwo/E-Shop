import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as ProductsActions from './products.actions';
import { Product } from '../models/product.model';

export const productsAdapter = createEntityAdapter<Product>({
  selectId: (p) => p.id,
});

export interface ProductsState extends EntityState<Product> {
  loading: boolean;
  error: any;
}

export const initialState: ProductsState = productsAdapter.getInitialState({
  loading: false,
  error: null,
});

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => {
    const newState = { ...state, loading: true, error: null };

    return newState;
  }),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => {
    const newState = productsAdapter.setAll(products, { ...state, loading: false });
    return newState;
  }),
  on(ProductsActions.loadProductsFailure, (state, { error }) => {
    const newState = { ...state, loading: false, error };

    return newState;
  })
);

export const { selectAll } = productsAdapter.getSelectors();
