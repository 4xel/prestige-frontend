import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { MaterialModule } from '@angular/material/';
import 'hammerjs';

import { AppComponent } from './app.component';
import { GithubLoginComponent } from './github-login/github-login.component';
import { GithubService } from './github.service';
import { GithubAuthenticationComponent } from './github-authentication/github-authentication.component';
import { HomeComponent } from './home/home.component';

// import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import {
  routing,
  appRoutingProviders
} from './app.routes';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    GithubLoginComponent,
    GithubAuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // AlertModule,
    MaterialModule.forRoot()
  ],
  providers: [
    GithubService,
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
