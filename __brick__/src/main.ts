import { enableProdMode, EnvironmentProviders, isDevMode, Provider } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DefaultExport } from '@angular/router';
import { fast } from 'ngx-fastboot';

import { AppComponent } from './app/app.component';
import { toBoolean } from './utilities';

if (!isDevMode() || toBoolean(import.meta.env.{{applicationName.constantCase()}}_PRODUCTION)) {
  enableProdMode();
}

type ProvidersDefaultExport = Promise<DefaultExport<Array<EnvironmentProviders | Provider>>>;

fast(bootstrapApplication, AppComponent, {
  providers: [
    (): ProvidersDefaultExport => import('./app/configs/sentry.config'),
    (): ProvidersDefaultExport => import('./app/configs/router.config'),
    (): ProvidersDefaultExport => import('./app/configs/angular.config'),
    (): ProvidersDefaultExport => import('./app/configs/ngrx.config'),
    (): ProvidersDefaultExport => import('./app/core/i18n/i18n.config'),
  ],
})
  .then(async () => import('./app/configs/sentry.config').then((config) => config.initSentryConfig()))
  .catch((err) =>
    // eslint-disable-next-line no-console
    console.error(err),
  );
