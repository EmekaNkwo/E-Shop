import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { WishlistFacade } from '../../../features/wishlist/wishlist.facade';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss'],
})
export class ProductCardComponent {
  private wishlistFacade = inject(WishlistFacade);
  @Input() id!: string;
  @Input() title!: string;
  @Input() price!: number;
  @Input() image!: string;

  @Output() addToCart = new EventEmitter<void>();
  get inWishlist() {
    return this.wishlistFacade.isInWishlist(this.id);
  }
  @Output() toggleWishlist = new EventEmitter<void>();
}
