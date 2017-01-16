import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { GithubCredentials } from './githubCredentials.config';

@Injectable()
export class GithubService {
  // @Github Credentials from GithubCredentials
  private client_id = GithubCredentials.client_id;
  private client_secret = GithubCredentials.client_secret;
  private client_basic_token = GithubCredentials.client_basic_token;
  private github_url = GithubCredentials.github_url;

  private accessTokenObserver: Observable<any>;
  private accessToken: any;

  constructor(private http: Http) { }

  getAccessToken(code: string) {
    if (!this.accessTokenObserver && code) {
      let body = {
        code: code,
        client_id: this.client_id,
        client_secret: this.client_secret
      };
      let bodyString = JSON.stringify(body); // Stringify payload
      let headers = new Headers({
        'Content-Type': 'application/json',
        "Accept": "application/json"
      }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option

      this.accessToken = this.http.post(this.github_url, bodyString, options) // ...using post request
        .map((res: Response) => {
          let json = res.json();
          if (json && json.access_token) {
            localStorage.setItem('token_id', json.access_token); // save acces token in localStorage
            this.accessToken = json;
            return { "authenticated": true };
          } else {
            return { "authenticated": false };
          }
        }) // ...and calling .json() on the response to return data
        .catch(this.handleError); //...errors if any
    }
    return this.accessToken;
  }

  getUser() {    
    let accessToken =  localStorage.getItem('token_id') || this.accessToken.access_token; // get acces token in localStorage || this.accessToken.access_token
    let headers = new Headers({ 'Authorization': 'token ' + accessToken }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.get("https://api.github.com/user", options)
      .map((res: Response) => {
        console.log("get users data", res.json());
        return res.json();
      })
      .catch(this.handleError); //...errors if any
  }

  getMembers() {
    let accessToken =  localStorage.getItem('token_id') || this.accessToken.access_token; // get acces token in localStorage || this.accessToken.access_token
    let headers = new Headers({ 'Authorization': this.client_basic_token }); // get With Basic gitHub Token
    // let headers = new Headers({ 'Authorization': 'token ' + accessToken });
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.get("https://api.github.com/orgs/ordina-jworks/members", options)
      .map((res: Response) => {
        console.log("get member data", res, res.json());
        return res.json();
      })
      .catch(this.handleError); //...errors if any
  }

  logOut() {
    localStorage.removeItem('token_id');
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}