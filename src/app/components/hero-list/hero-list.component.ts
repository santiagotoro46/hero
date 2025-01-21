import { Component } from '@angular/core';
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

  public heroes: Hero[] = [
    {
      id: 69,
      name: 'Batman',
      powerstats: {
        intelligence: 81,
        strength: 40,
        speed: 29,
        durability: 55,
        power: 63,
        combat: 90
      },
  
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg",
      alignment: 'good'
    },

    {
      id:162,
      name: 'Carnage',
      powerstats: {
        intelligence: 63,
        strength: 63,
        speed: 70,
        durability: 84,
        power: 88,
        combat: 90
      },
  
      image: "https://www.superherodb.com/pictures2/portraits/10/100/187.jpg",
      alignment: 'bad'
    },

    {
      id:620,
      name: 'Spider-Man',
      powerstats: {
        intelligence: 90,
        strength: 55,
        speed: 67,
        durability: 75,
        power: 74,
        combat: 85
      },
  
      image: "https://www.superherodb.com/pictures2/portraits/10/100/133.jpg",
      alignment: 'good'
    },


  ]
  savePowerStats({ hero,powerstat:powerstat,value }: HeroPowerStatsChange){
    hero.powerstats[powerstat] += value;
  }
}
