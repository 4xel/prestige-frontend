import { Component, OnInit } from '@angular/core';
import { GithubService } from "../github.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-github-login',
  templateUrl: './github-login.component.html',
  styleUrls: ['./github-login.component.scss']
})
export class GithubLoginComponent implements OnInit {
  private name: string;
  private profileImage: string;

  constructor(private githubService: GithubService, private router: Router) {
    if (localStorage.getItem('token_id')) {
      this.githubService.getUser()
        .subscribe(user => {
          this.name = user.name,
            this.profileImage = user.avatar_url;
        })
    }
  }

  logOut() {
    localStorage.removeItem('token_id');
    this.router.navigateByUrl('/');
  }

  ngOnInit() {  }
}
