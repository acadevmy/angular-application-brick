import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: '{{prefix.paramCase()}}-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {}
