import { Component, computed, input, output } from '@angular/core';
import { Hero, PowerStats } from '../../shared/interfaces/hero.interfaces';
import { HeroPowerStatsChange } from '../../shared/interfaces/hero-powerstats-change.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-item.component.html',
  styleUrl: './hero-item.component.scss'
})
export class HeroItemComponent {

  hero = input.required<Hero>();
  powerstatsChange = output<HeroPowerStatsChange>();

  isHeroVillain = computed(() => this.hero().alignment === 'bad');

  decrementPowerStats(powerstat: keyof PowerStats): void {
    this.powerstatsChange.emit({ hero: this.hero(), powerstat, value: -1 });
  }

  incrementPowerStats(powerstat: keyof PowerStats): void {
    this.powerstatsChange.emit({ hero: this.hero(), powerstat, value: 1 })
  }

  constructor() {
  }
}
