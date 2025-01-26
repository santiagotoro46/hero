import { Component, input } from '@angular/core';
import { HeroItemComponent } from '../hero-item/hero-item.component';
import { Hero } from '../../shared/interfaces/hero.interfaces';
import { HeroPowerStatsChange } from '../../shared/interfaces/hero-powerstats-change.interface';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [HeroItemComponent],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss'
})
export class HeroListComponent {

  heroes = input.required<Hero[]>();
  savePowerStats({ hero, powerstat: powerstat, value }: HeroPowerStatsChange) {
    hero.powerstats[powerstat] += value;
  }
}
