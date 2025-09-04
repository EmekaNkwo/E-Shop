import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.routes').then((m) => m.PRODUCTS_ROUTES),
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/cart/cart.routes').then((m) => m.CART_ROUTES),
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./features/wishlist/wishlist.routes').then((m) => m.WISHLIST_ROUTES),
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products' }, // Handle 404
];
