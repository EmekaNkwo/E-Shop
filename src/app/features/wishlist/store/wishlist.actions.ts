import { createAction, props } from '@ngrx/store';
import { Product } from '../../products/models/product.model';

export const addToWishlist = createAction('[Wishlist] Add Item', props<{ product: Product }>());
export const removeFromWishlist = createAction(
  '[Wishlist] Remove Item',
  props<{ productId: string }>()
);
export const clearWishlist = createAction('[Wishlist] Clear');
export const loadProducts = createAction('[Wishlist] Load Products');
