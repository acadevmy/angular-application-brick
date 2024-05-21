import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  // eslint-disable-next-line no-console
  console.error(err),
);
