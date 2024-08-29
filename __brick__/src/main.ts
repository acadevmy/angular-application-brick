import { enableProdMode, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { fast } from 'ngx-fastboot';

import { AppComponent } from './app/app.component';
import { toBoolean } from './utilities';

if (!isDevMode() || toBoolean(import.meta.env.{{applicationName.constantCase()}}_PRODUCTION)) {
  enableProdMode();
}

fast(bootstrapApplication, AppComponent, {
  providers: [
    () => import('./app/configs/sentry.config'),
    () => import('./app/configs/router.config'),
    () => import('./app/configs/angular.config'),
    () => import('./app/configs/ngrx.config'),
    () => import('./app/core/i18n/i18n.config'),
  ],
})
  .then(async () => {
    return import('./app/configs/sentry.config').then((config) => config.initSentryConfig());
  })
  .catch((err) =>
    // eslint-disable-next-line no-console
    console.error(err),
  );
