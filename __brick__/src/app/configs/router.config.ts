import { EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from '../app.routes';

export default [
  provideRouter(
    routes,
    withComponentInputBinding(),
    withViewTransitions({ skipInitialTransition: true }),
  ),
] satisfies Array<Provider | EnvironmentProviders>;
