import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroListComponent } from './components/hero-list/hero-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hero';
}
