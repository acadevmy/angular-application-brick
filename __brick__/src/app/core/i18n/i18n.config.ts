import { HttpClient } from '@angular/common/http';
import { Injectable, inject, isDevMode } from '@angular/core';
import {
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  translocoConfig,
} from '@jsverse/transloco';
import { Observable } from 'rxjs';

import { I18nService } from './services';

@Injectable()
export class I18nLoader implements TranslocoLoader {
  private readonly http = inject(HttpClient);

  public getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
  }
}

export const i18nConfig = [
  I18nService,
  { provide: TRANSLOCO_LOADER, useClass: I18nLoader },
  {
    provide: TRANSLOCO_CONFIG,
    useValue: translocoConfig({
      availableLangs: ['it', 'en'],
      defaultLang: 'it',
      fallbackLang: 'it',
      reRenderOnLangChange: true,
      prodMode: !isDevMode(),
    }),
  },
];

export default i18nConfig;
