import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { i18nConfig } from './core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

const animationsConfig = [provideAnimations(), provideAnimationsAsync()];

const routerConfig = [
  provideRouter(
    routes,
    withComponentInputBinding(),
    withViewTransitions({ skipInitialTransition: true }),
  ),
];

const ngrxConfig = [
  provideStore(),
  provideEffects(),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    ...animationsConfig,
    ...i18nConfig,
    ...ngrxConfig,
    ...routerConfig,
  ],
};
