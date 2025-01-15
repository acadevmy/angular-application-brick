import { HttpClient } from '@angular/common/http';
import {
  IModuleTranslationOptions as ModuleTranslationOptions,
  ModuleTranslateLoader,
} from '@larscom/ngx-translate-module-loader';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';

import { I18nService } from './services';

export function moduleHttpLoaderFactory(http: HttpClient): ModuleTranslateLoader {
  const baseTranslateUrl = './assets/i18n';

  const options: ModuleTranslationOptions = {
    lowercaseNamespace: true,
    modules: [{ baseTranslateUrl }],
  };

  return new ModuleTranslateLoader(http, options);
}

export const i18nConfig = [
  I18nService,
  provideTranslateService({
    defaultLanguage: 'it',
    useDefaultLang: true,
    loader: {
      provide: TranslateLoader,
      useFactory: moduleHttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
];

export default i18nConfig;
