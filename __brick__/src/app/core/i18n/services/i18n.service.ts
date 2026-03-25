import { inject, Injectable } from '@angular/core';
import { getBrowserCultureLang, getBrowserLang, TranslocoService } from '@jsverse/transloco';
import { map, Observable } from 'rxjs';

import { SupportedLanguage, supportedLanguages } from '../models';

@Injectable()
export class I18nService {
  private readonly translocoService = inject(TranslocoService);

  public constructor() {
    this.translocoService.setActiveLang(this.translocoService.getDefaultLang());
  }

  public get currentLanguage(): SupportedLanguage {
    return this.translocoService.getActiveLang() as SupportedLanguage;
  }

  public get supportedLanguages(): SupportedLanguage[] {
    return Object.values(supportedLanguages);
  }

  public get onLangChange(): Observable<SupportedLanguage> {
    return this.translocoService.langChanges$.pipe(map((lang) => lang as SupportedLanguage));
  }

  public get browserLanguage(): string | undefined {
    return getBrowserLang();
  }

  public get browserCultureLanguage(): string {
    return getBrowserCultureLang();
  }

  public use(lang: SupportedLanguage): void {
    this.translocoService.setActiveLang(lang);
  }

  public instantTranslate(key: string, params?: object): string {
    return this.translocoService.translate(key, params);
  }

  public translate(key: string, params?: object): Observable<string> {
    return this.translocoService.selectTranslate(key, params);
  }
}
