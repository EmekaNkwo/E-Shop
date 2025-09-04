import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState, selectAll } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(selectCartState, selectAll);

export const selectCartCount = createSelector(selectCartItems, (items) => items.length);

export const selectCartTotal = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);
