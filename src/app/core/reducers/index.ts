import { ActionReducerMap } from '@ngrx/store';
import { productsReducer, ProductsState } from '../../features/products/store/products.reducer';
import { cartReducer, CartState } from '../../features/cart/store/cart.reducer';
import { wishlistReducer, WishlistState } from '../../features/wishlist/store/wishlist.reducer';

// Root App State interface
export interface AppState {
  products: ProductsState;
  cart: CartState;
  wishlist: WishlistState;
  //   auth: AuthState;
  //   profile: ProfileState;
  //   orders: OrdersState;
}

// Combine reducers
export const AppReducers: ActionReducerMap<AppState> = {
  products: productsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  //   auth: authReducer,
  //   profile: profileReducer,
  //   orders: ordersReducer,
};
