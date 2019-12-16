import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'techware-frontend';
}
