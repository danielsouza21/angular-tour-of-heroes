import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';

import { 
  PreloadAllModules, 
  provideRouter, 
  withDebugTracing, 
  withPreloading, 
  withRouterConfig 
} 
from '@angular/router';

import {AppComponent} from './app/app.component';

import { routes } from './routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(), 
    provideRouter(routes, 
      withPreloading(PreloadAllModules),
      withDebugTracing(),
    ),
],
});
