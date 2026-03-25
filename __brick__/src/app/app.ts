import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: '{{prefix.paramCase()}}-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App {}

