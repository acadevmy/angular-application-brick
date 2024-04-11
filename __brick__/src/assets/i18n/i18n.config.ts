import {
  ModuleTranslateLoader,
  IModuleTranslationOptions as ModuleTranslationOptions,
} from '@larscom/ngx-translate-module-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { I18nService } from './services';
import { importProvidersFrom } from '@angular/core';

export function moduleHttpLoaderFactory(http: HttpClient) {
  const baseTranslateUrl = './assets/i18n';

  const options: ModuleTranslationOptions = {
    lowercaseNamespace: true,
    modules: [{ baseTranslateUrl }],
  };

  return new ModuleTranslateLoader(http, options);
}

export const i18nConfig = [
  I18nService,
  importProvidersFrom(
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: moduleHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ),
];
