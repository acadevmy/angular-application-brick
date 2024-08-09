import { EnvironmentProviders, isDevMode, Provider } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export default [
  provideStore(),
  provideEffects(),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
] satisfies Array<Provider | EnvironmentProviders>;
