import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero.service';

import {
  NgIf,
  NgFor,
  UpperCasePipe,
  NgClass
} from '@angular/common';

import { Hero } from '../../hero-interface';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HEROES_LIST_MOCK } from '../../mock-heroes';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    NgClass,
    UpperCasePipe,
    HeroDetailComponent
  ],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  constructor(private heroService: HeroService) { //Singleton instance of HeroService with DI
    /* 
     The constructor shouldn't do anything. 
     It certainly shouldn't call a function that makes HTTP requests 
     to a remote server as a real data service would.
    */
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.isLoading = true;
    
    this.heroService.getHeroes() //Returns an Observable<Hero[]>
    .subscribe({
      next: (heroes) => {
        this.heroes = heroes;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to get heroes:', error);
        this.isLoading = false;
      }
    });
  }
  
  //Variables being used in the html component
  heroes: Hero[] = [];
  selectedHero?: Hero;
  isLoading: Boolean = false;

  onSelect(hero: Hero): void {
    //I could use shallow copy to avoid changes the heroes array
    this.selectedHero = hero; 
  }
}
