import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DecimalPipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { I18nService, SupportedLanguage } from './core';
import { TranslateModule } from '@ngx-translate/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: '{{prefix.paramCase()}}-devmy',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe, NgOptimizedImage, DecimalPipe],
  template: `
    <div class="devmy">
      <img
        ngSrc="https://devmy.it/assets/svg/logo_white.svg"
        alt="Devmy Logo"
        width="436"
        height="128"
        priority
      />
      <img
        ngSrc="https://devmy.it/assets/svg/think.design.code.svg"
        alt="Think Design Code"
        width="218"
        height="64"
        priority
      />

      <h1>{{=<% %>=}}{{ 'devmy-likes' | translate: { counter: counter() | number } }}<%={{ }}=%></h1>
      <button (click)="add()">{{=<% %>=}}{{ 'add-like' | translate }}<%={{ }}=%></button>

      <div class="language-selector">
        @for (lang of supportedLanguages; track lang) {
          <button class="outline" (click)="changeLanguage(lang)">
          {{=<% %>=}}{{ lang | uppercase }}<%={{ }}=%>
          </button>
        }
      </div>
    </div>
  `,
  styles: `
    .devmy {
      width: 100dvw;
      height: 100dvh;
      background: #191616;
      font-family: Monaco, 'Lucida Console', monospace;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        color: white;
        margin: 1rem 0;
      }

      button {
        background: #ff6600;
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        transition: all ease-in-out 0.3s;

        &:hover {
          background: #d65802;
        }

        &.outline {
          border: 1px solid #ff6600;
          background: transparent;

          &:hover {
            background: #ff6600;
          }
        }
      }

      .language-selector {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        display: flex;
        gap: 1rem;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DevmyComponent {
  public counter = signal(100000000000);
  public i18nService = inject(I18nService);
  public supportedLanguages = this.i18nService.supportedLanguages;

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.add(this.generateRandomValue()));
  }

  public add(input = 1): void {
    this.counter.update((value) => value + input);
  }

  public changeLanguage(lang: SupportedLanguage): void {
    this.i18nService.use(lang);
  }

  public generateRandomValue(): number {
    return Math.round(Math.random() * 100);
  }
}
