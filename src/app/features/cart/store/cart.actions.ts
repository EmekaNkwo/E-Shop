import { createAction, props } from '@ngrx/store';
import { Product } from '../../products/models/product.model';

export const addToCart = createAction('[Cart] Add Item', props<{ product: Product }>());
export const removeFromCart = createAction('[Cart] Remove Item', props<{ productId: string }>());
export const clearCart = createAction('[Cart] Clear');
export const addManyToCart = createAction(
  '[Cart] Add Many Items',
  props<{ products: Product[] }>()
);
export const updateQuantity = createAction(
  '[Cart] Update Quantity',
  props<{ productId: string; quantity: number }>()
);
export const loadCart = createAction('[Cart] Load Cart');
