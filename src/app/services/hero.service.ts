import { Injectable } from '@angular/core';
import { Hero } from '../hero-interface';
import { HEROES_LIST_MOCK } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES_LIST_MOCK); // Returns an Observable<Hero[]>

    const minTime = 500;
    const maxTime = 3000;
    const randomDelay = Math.random() * (maxTime - minTime) + minTime; // Calculate a random delay between values milliseconds
  
    return heroes.pipe(
      delay(randomDelay),
      tap(() => {
        //Tap() allows you to run some code that doesn't affect the outcome of the observable sequence.
        this.messageService.add(`HeroService: fetched heroes after ${randomDelay}ms`);
      })
    );
  }
}
