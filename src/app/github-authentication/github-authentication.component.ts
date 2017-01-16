import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Response } from "@angular/http";
import { GithubService } from "../github.service";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-github-authentication',
  templateUrl: './github-authentication.component.html',
  styleUrls: ['./github-authentication.component.scss']
})
export class GithubAuthenticationComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private githubService: GithubService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (param: any) => {
        let code = param['code'];
        console.log(code);
        this.githubService.getAccessToken(code)
          .subscribe(
          (param: any) => {
            if (param.authenticated) {
              console.log("authenticated");
              this.router.navigate(['/home']);
            } else {
              console.log("not authenticated");
              this.router.navigate(['/welcome']);
            }
          }
          ); //.catch(error => console.log(error)  ); //...errors if any;
      });
  }
}
