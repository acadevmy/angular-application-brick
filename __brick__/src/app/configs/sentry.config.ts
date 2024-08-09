import { APP_INITIALIZER, EnvironmentProviders, ErrorHandler, Provider } from '@angular/core';
import { Router } from '@angular/router';
import {
  browserTracingIntegration,
  createErrorHandler,
  init,
  replayIntegration,
  TraceService,
} from '@sentry/angular-ivy';
import { isNil, split, toNumber, trim } from 'lodash-es';

export function initSentryConfig() {
  if (isNil(import.meta.env?.ANGULAR_SENTRY_DNS)) {
    // eslint-disable-next-line no-console
    console.warn('Sentry is not initialized!');

    return;
  }

  init({
    dsn: import.meta.env?.ANGULAR_SENTRY_DNS,
    integrations: [browserTracingIntegration(), replayIntegration()],
    tracesSampleRate: toNumber(import.meta.env?.ANGULAR_SENTRY_TRACE_SAMPLE_RATE),
    replaysSessionSampleRate: toNumber(import.meta.env?.ANGULAR_SENTRY_REPLAY_SAMPLE_RATE),
    replaysOnErrorSampleRate: toNumber(import.meta.env?.ANGULAR_SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE),
    tracePropagationTargets: split(
      import.meta.env?.ANGULAR_SENTRY_TRACE_PROPAGATION_TARGETS,
      ',',
    ).map(trim),
  });

  // eslint-disable-next-line no-console
  console.info('Sentry initialized.');
}

export default [
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
] satisfies Array<Provider | EnvironmentProviders>;
