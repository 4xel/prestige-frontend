import { Component } from '@angular/core';
import { GithubService } from "./github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  users : any;
  constructor(private githubService: GithubService) { }

  getUsers() { }
}
