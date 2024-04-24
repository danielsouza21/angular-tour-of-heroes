import { Component } from '@angular/core';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeroesComponent, 
    MessagesComponent, 
    RouterOutlet, 
    RouterModule ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/