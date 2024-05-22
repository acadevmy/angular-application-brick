import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, isDevMode } from '@angular/core';
import { Router, provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { TraceService, createErrorHandler } from '@sentry/angular-ivy';
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
    useFactory: () => () => {},
    deps: [TraceService],
    multi: true,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    ...animationsConfig,
    ...i18nConfig,
    ...ngrxConfig,
    ...sentryConfig,
    ...routerConfig,
  ],
};
