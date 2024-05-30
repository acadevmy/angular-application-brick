import { enableProdMode, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { browserTracingIntegration, init, replayIntegration } from '@sentry/angular-ivy';
import { split, toNumber, trim } from 'lodash-es';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

init({
  dsn: import.meta.env.{{applicationName.constantCase()}}_SENTRY_DNS,
  integrations: [browserTracingIntegration(), replayIntegration()],
  tracesSampleRate: toNumber(import.meta.env.{{applicationName.constantCase()}}_SENTRY_TRACE_SAMPLE_RATE),
  replaysSessionSampleRate: toNumber(import.meta.env.{{applicationName.constantCase()}}_SENTRY_REPLAY_SAMPLE_RATE),
  replaysOnErrorSampleRate: toNumber(import.meta.env.{{applicationName.constantCase()}}_SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE),
  tracePropagationTargets: split(import.meta.env.{{applicationName.constantCase()}}_SENTRY_TRACE_PROPAGATION_TARGETS, ',',).map(
    trim,
  ),
});

if (isDevMode()) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  // eslint-disable-next-line no-console
  console.error(err),
);
