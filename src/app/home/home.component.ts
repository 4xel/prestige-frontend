import { Component, OnInit } from '@angular/core';
import { GithubService } from "../github.service";
import { ActivatedRoute, Router } from "@angular/router";

import { MaterialModule } from '@angular/material';

import 'rxjs/';

@Component({
  selector: 'user-profile',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private name: string;
  private profileImage: string;
  private users: any;

  constructor(private githubService: GithubService, private router: Router) { }
  toggle = [];

  giveSomeAwesomeness(inx): void {
    if(this.toggle[inx] === undefined) {
      this.toggle[inx] = false;
    }
    this.toggle[inx] = this.toggle[inx] === false || undefined ? true : false;
  }

  ngOnInit() {
    if (localStorage.getItem('token_id')) {
      this.githubService.getMembers()
        .subscribe(users => {
          this.users = users;
        });
    } else {
      console.log("no acces_token");
    }
  }
}
