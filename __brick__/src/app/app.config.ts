import { provideHttpClient } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  ErrorHandler,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  Router,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { createErrorHandler, TraceService } from '@sentry/angular-ivy';

import { routes } from './app.routes';
import { i18nConfig } from './core';

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

const sentryConfig = [
  {
    provide: ErrorHandler,
    useValue: createErrorHandler({
      showDialog: false,
      logErrors: true,
    }),
  },
  {
    provide: TraceService,
    deps: [Router],
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {
    },
    deps: [TraceService],
    multi: true,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    ...animationsConfig,
    ...i18nConfig,
    ...ngrxConfig,
    ...sentryConfig,
    ...routerConfig,
  ],
};
