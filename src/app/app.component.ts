import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroNewFormComponent } from './components/hero-new-form/hero-new-form.component';
import { Hero } from './shared/interfaces/hero.interfaces';

@Component({
  selector: 'app-root',
  imports: [HeroListComponent, HeroNewFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hero';
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
      id: 162,
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
      id: 620,
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

  addHero(hero:Hero){
    this.heroes.push(hero);
  }

}
