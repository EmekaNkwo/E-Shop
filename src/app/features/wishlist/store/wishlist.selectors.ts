import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WishlistState, wishlistAdapter } from './wishlist.reducer';

export const selectWishlistState = createFeatureSelector<WishlistState>('wishlist');

const { selectAll, selectEntities } = wishlistAdapter.getSelectors();

export const selectWishlistItems = createSelector(selectWishlistState, selectAll);
export const selectWishlistEntities = createSelector(selectWishlistState, selectEntities);
export const selectWishlistCount = createSelector(selectWishlistItems, (items) => items.length);

export const selectIsInWishlist = (productId: string) =>
  createSelector(selectWishlistEntities, (entities) => !!entities[productId]);
