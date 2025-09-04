import { Component, inject } from '@angular/core';
import { WishlistFacade } from '../../wishlist.facade';
import { CartFacade } from '../../../cart/cart.facade';
import { Product } from '../../../products/models/product.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule],
  templateUrl: './wishlist-page.html',
  styleUrls: ['./wishlist-page.scss'],
})
export class WishlistPageComponent {
  private wishlistFacade = inject(WishlistFacade);
  private cartFacade = inject(CartFacade);

  items = this.wishlistFacade.items;

  remove(id: string) {
    this.wishlistFacade.remove(id);
  }

  clear() {
    this.wishlistFacade.clear();
  }

  moveToCart(product: Product) {
    this.cartFacade.add(product);
    this.wishlistFacade.remove(product.id);
  }
}
