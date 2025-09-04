import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as CartActions from './cart.actions';
import { Product } from '../../products/models/product.model';

export interface CartItem extends Product {
  quantity: number;
}

export const cartAdapter = createEntityAdapter<CartItem>({
  selectId: (p) => p.id,
});

export interface CartState extends EntityState<CartItem> {}

export const initialState: CartState = cartAdapter.getInitialState();

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { product }) => {
    const existing = state.entities[product.id];
    return existing
      ? cartAdapter.updateOne(
          { id: product.id, changes: { quantity: existing.quantity + 1 } },
          state
        )
      : cartAdapter.addOne({ ...product, quantity: 1 }, state);
  }),
  on(CartActions.addManyToCart, (state, { products }) =>
    cartAdapter.addMany(
      products.map((p) => ({ ...p, quantity: 1 })),
      state
    )
  ),
  on(CartActions.removeFromCart, (state, { productId }) => cartAdapter.removeOne(productId, state)),
  on(CartActions.clearCart, (state) => cartAdapter.removeAll(state)),

  // ✅ handle quantity update
  on(CartActions.updateQuantity, (state, { productId, quantity }) => {
    const existing = state.entities[productId];
    if (!existing) return state;

    const newQuantity = existing.quantity + quantity;
    return newQuantity > 0
      ? cartAdapter.updateOne({ id: productId, changes: { quantity: newQuantity } }, state)
      : cartAdapter.removeOne(productId, state);
  })
);

export const { selectAll } = cartAdapter.getSelectors();
