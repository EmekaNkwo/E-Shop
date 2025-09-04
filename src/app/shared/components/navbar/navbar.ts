import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { CartFacade } from '../../../features/cart/cart.facade';
import { WishlistFacade } from '../../../features/wishlist/wishlist.facade';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private cartFacade = inject(CartFacade);
  private wishlistFacade = inject(WishlistFacade);

  cartCount = this.cartFacade.count;
  wishlistCount = this.wishlistFacade.count;

  @Output() toggleTheme = new EventEmitter<void>();
}
