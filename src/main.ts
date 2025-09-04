import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { localStorageMetaReducer } from './app/core/store/meta-reducers/local-storage.metareducer';
import { App } from './app/app';
import { APP_ROUTES } from './app/app.routes';
import { AuthInterceptor } from './app/core/interceptors/auth.interceptor';
import { AppReducers } from './app/core/reducers';
import { provideZonelessChangeDetection } from '@angular/core';
import { ProductsEffects } from './app/features/products/store/products.effects';

bootstrapApplication(App, {
  providers: [
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideStore(AppReducers, { metaReducers: [localStorageMetaReducer] }),
    provideEffects([ProductsEffects]), // feature effects added lazily
    provideZonelessChangeDetection(),
  ],
});
