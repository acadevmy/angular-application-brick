import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { SupportedLanguage, supportedLanguages } from '../models';

@Injectable()
export class I18nService {
  public constructor(private readonly translateService: TranslateService) {
    this.translateService.use(this.translateService.defaultLang);
  }

  public get currentLanguage(): SupportedLanguage {
    return this.translateService.currentLang as SupportedLanguage;
  }

  public get supportedLanguages(): SupportedLanguage[] {
    return Object.values(supportedLanguages);
  }

  public get onLangChange(): Observable<LangChangeEvent> {
    return this.translateService.onLangChange.asObservable();
  }

  public get ngxTranslateService(): TranslateService {
    return this.translateService;
  }

  public get browserLanguage(): string | undefined {
    return this.translateService.getBrowserLang();
  }

  public get browserCultureLanguage(): string | undefined {
    return this.translateService.getBrowserCultureLang();
  }

  public use(lang: SupportedLanguage): Observable<unknown> {
    return this.translateService.use(lang);
  }

  public instantTranslate(key: string, params?: object): string {
    return this.translateService.instant(key, params);
  }

  public translate(key: string, params?: object): Observable<string> {
    return this.translateService.get(key, params);
  }
}
