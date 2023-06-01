import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  template:`
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a href="" class="navbar-brand">{{pageTitle}}</a>
  <div class="collapse navbar-collapse">
  <ul class="navbar-nav mr-auto">
      <li class="nav-item" [routerLinkActive]="['active']">
          <a routerLink="/welcome" class="nav-link">Home</a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a routerLink="/products" class="nav-link">Product List</a>
      </li>
  </ul>
  </div>
</nav>
<div class="container">
  <router-outlet></router-outlet>
</div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Angular: Getting Started';
}
