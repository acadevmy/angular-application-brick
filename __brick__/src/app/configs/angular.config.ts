import { provideHttpClient } from '@angular/common/http';
import { EnvironmentProviders, Provider, provideZonelessChangeDetection } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  provideClientHydration,
  withEventReplay,
  withIncrementalHydration,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export default [
  provideAnimations(),
  provideAnimationsAsync(),
  provideHttpClient(),
  ReactiveFormsModule,
  provideZonelessChangeDetection(),
  provideClientHydration(withIncrementalHydration(), withEventReplay()),
] satisfies Array<Provider | EnvironmentProviders>;
