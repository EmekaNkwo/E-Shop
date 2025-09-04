import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CartFacade } from '../../cart.facade';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,
  ],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.scss'],
})
export class CartPage {
  private cartFacade = inject(CartFacade);

  items = this.cartFacade.items;
  total = this.cartFacade.total;

  constructor() {}

  remove(id: string) {
    this.cartFacade.remove(id);
  }

  clearCart() {
    this.cartFacade.clear();
  }

  updateQuantity(id: string, newQuantity: number) {
    this.cartFacade.updateQuantity(id, newQuantity);
  }

  checkout() {
    // TODO: Implement checkout functionality
    console.log('Proceeding to checkout');
  }
}
