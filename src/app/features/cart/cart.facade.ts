import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CartActions from './store/cart.actions';
import * as CartSelectors from './store/cart.selectors';
import { Product } from '../products/models/product.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class CartFacade {
  private store = inject(Store);

  // ✅ convert selectors to signals
  items = toSignal(this.store.select(CartSelectors.selectCartItems), { initialValue: [] });
  count = toSignal(this.store.select(CartSelectors.selectCartCount), { initialValue: 0 });
  total = toSignal(this.store.select(CartSelectors.selectCartTotal), { initialValue: 0 });

  add(product: Product) {
    this.store.dispatch(CartActions.addToCart({ product }));
  }

  addMany(products: Product[]) {
    this.store.dispatch(CartActions.addManyToCart({ products }));
  }

  remove(productId: string) {
    this.store.dispatch(CartActions.removeFromCart({ productId }));
  }

  updateQuantity(productId: string, quantity: number) {
    this.store.dispatch(CartActions.updateQuantity({ productId, quantity }));
  }

  clear() {
    this.store.dispatch(CartActions.clearCart());
  }
}
