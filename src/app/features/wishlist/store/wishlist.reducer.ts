import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as WishlistActions from './wishlist.actions';
import { Product } from '../../products/models/product.model';

export const wishlistAdapter = createEntityAdapter<Product>({
  selectId: (p) => p.id,
});

export interface WishlistState extends EntityState<Product> {}

export const initialState: WishlistState = wishlistAdapter.getInitialState();

export const wishlistReducer = createReducer(
  initialState,
  on(WishlistActions.addToWishlist, (state, { product }) => wishlistAdapter.addOne(product, state)),
  on(WishlistActions.removeFromWishlist, (state, { productId }) =>
    wishlistAdapter.removeOne(productId, state)
  ),
  on(WishlistActions.clearWishlist, (state) => wishlistAdapter.removeAll(state))
);

export const { selectAll } = wishlistAdapter.getSelectors();
