import { inject, Injectable, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import * as WishlistActions from './store/wishlist.actions';
import * as WishlistSelectors from './store/wishlist.selectors';
import { Product } from '../products/models/product.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class WishlistFacade {
  private store = inject(Store);

  private items$ = this.store.select(WishlistSelectors.selectWishlistItems);
  private count$ = this.store.select(WishlistSelectors.selectWishlistCount);

  items = toSignal(this.items$, { initialValue: [] });
  count = toSignal(this.count$, { initialValue: 0 });

  constructor() {}

  add(product: Product) {
    this.store.dispatch(WishlistActions.addToWishlist({ product }));
  }

  remove(productId: string) {
    this.store.dispatch(WishlistActions.removeFromWishlist({ productId }));
  }

  clear() {
    this.store.dispatch(WishlistActions.clearWishlist());
  }

  // ✅ Signal-based isInWishlist (no subscriptions needed)
  isInWishlist(productId: string) {
    return computed(() => this.items().some((item) => item.id === productId));
  }
}
