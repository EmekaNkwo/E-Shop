import { Component, OnInit, signal, computed, Signal } from '@angular/core';

import { ProductsFacade } from '../../products.facade';
import { Product } from '../../models/product.model';

import { CartFacade } from '../../../cart/cart.facade';
import { WishlistFacade } from '../../../wishlist/wishlist.facade';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductCardComponent, MatIcon, MatSpinner],
  templateUrl: './products-page.html',
  styleUrls: ['./products-page.scss'],
})
export class ProductsPageComponent implements OnInit {
  filter = signal('');
  products!: Signal<Product[]>;
  loading!: Signal<boolean>;

  filteredProducts = computed(() => {
    const f = this.filter().toLowerCase();
    return this.products().filter((p) => p.title.toLowerCase().includes(f));
  });

  constructor(
    private productsFacade: ProductsFacade,
    private cartFacade: CartFacade,
    private wishlistFacade: WishlistFacade
  ) {
    this.products = toSignal(this.productsFacade.products$, { initialValue: [] });
    this.loading = toSignal(this.productsFacade.loading$, { initialValue: false });
  }

  ngOnInit() {
    this.productsFacade.loadProducts();
  }

  addToCart(product: Product) {
    this.cartFacade.add(product);
  }

  toggleWishlist(product: Product) {
    const inWishlist = this.wishlistFacade.isInWishlist(product.id)();
    inWishlist ? this.wishlistFacade.remove(product.id) : this.wishlistFacade.add(product);
  }

  updateFilter(value: string) {
    this.filter.set(value);
  }
}
