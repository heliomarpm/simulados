import { Component } from '@angular/core';
import { DarkMode } from './shared/dark-mode';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    DarkMode.initialize();
  }
}
