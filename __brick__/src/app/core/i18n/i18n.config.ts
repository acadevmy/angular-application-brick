import { HttpClient } from '@angular/common/http';
import { Injectable, inject, isDevMode } from '@angular/core';
import {
  Translation,
  TranslocoLoader,
  provideTransloco,
  translocoConfig
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
  provideTransloco({
    config: translocoConfig({
      availableLangs: ['it', 'en'],
      defaultLang: 'it',
      fallbackLang: 'it',
      reRenderOnLangChange: true,
      prodMode: !isDevMode(),
    }),
    loader: I18nLoader,
  }),
];

export default i18nConfig;
