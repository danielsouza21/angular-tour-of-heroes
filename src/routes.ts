import { Routes } from '@angular/router';
import { HeroesComponent } from './app/components/heroes/heroes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HeroesComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];