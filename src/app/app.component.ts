import { Component } from '@angular/core';

//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.scss']
//})

@Component({
  selector: 'app-root',
  template: `<nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Spring Security Oauth - Authorization Code</a>
      </div>
    </div>
  </nav>
  <router-outlet></router-outlet>`
})

export class AppComponent {
  title = 'PyBase';
}

