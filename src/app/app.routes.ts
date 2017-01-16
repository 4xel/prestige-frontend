import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GithubLoginComponent } from './github-login/github-login.component';
import { GithubService } from './github.service';
import { GithubAuthenticationComponent } from './github-authentication/github-authentication.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  {path: 'welcome', component: HomeComponent},
          {path: 'authenticated/', component: GithubAuthenticationComponent},
          {path: 'home', component: HomeComponent},
          {path: '', redirectTo: 'welcome', pathMatch: 'full'},
          {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);