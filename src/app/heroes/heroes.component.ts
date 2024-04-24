import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  NgIf,
  NgFor,
  UpperCasePipe,
  NgClass
} from '@angular/common';

import { Hero } from '../hero-interface';
import { HEROES_LIST_MOCK } from '../mock-heroes';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    NgClass,
    UpperCasePipe,
  ],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  @Input() dataFromParent?: string;

  heroes = HEROES_LIST_MOCK;

  selectedHero?: Hero; //Variable is been used in component html

  onSelect(hero: Hero): void {
    //Set selectedHero 
    //(I could use shallow copy to avoid changes the heroes array)
    this.selectedHero = hero; 
  }
}
