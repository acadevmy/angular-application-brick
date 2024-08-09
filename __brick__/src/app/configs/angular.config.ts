import { provideHttpClient } from '@angular/common/http';
import { EnvironmentProviders, Provider, provideZoneChangeDetection } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export default [
  provideAnimations(),
  provideAnimationsAsync(),
  provideHttpClient(),
  ReactiveFormsModule,
  provideZoneChangeDetection({ eventCoalescing: true }),
] satisfies Array<Provider | EnvironmentProviders>;
