import { Component,inject, output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../shared/interfaces/hero.interfaces';

@Component({
  selector: 'app-hero-new-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hero-new-form.component.html',
  styleUrl: './hero-new-form.component.scss'
})
export class HeroNewFormComponent {
  add = output<Hero>();
  readonly #formBuilder = inject(FormBuilder);
  message = "";

  heroForm : FormGroup = this.#formBuilder.group({
    name : ['',Validators.required],
    image : [''],
    alignment:[""],
    
    powerstats: this.#formBuilder.group({
      intelligence: [100,[Validators.required,Validators.min(0),Validators.max(100)]],
      combat: [60,[Validators.required,Validators.min(0),Validators.max(100)]],
      durability: [30,[Validators.required,Validators.min(0),Validators.max(100)]],
      power: [80,[Validators.required,Validators.min(0),Validators.max(100)]],
      speed: [10,[Validators.required,Validators.min(0),Validators.max(100)]],
      strength: [36,[Validators.required,Validators.min(0),Validators.max(100)]],
    })
  });

  addHero(){
    if (this.heroForm.invalid) {
      this.message = 'Formulario inválido';
    } else {
      const hero : Hero = {
        id: Math.floor(Math.random() * 1000) + 1,
        ...this.heroForm.value,
        powerstats: {...this.heroForm.value.powerstats}
      };
      console.log("Heroe creado: ", hero);
      this.add.emit(hero);
    }
  }
  
}
