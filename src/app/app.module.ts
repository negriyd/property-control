import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent } from './component/app/app.component';
import {Auth} from "./service/auth/auth.service";
import {TopNavComponent} from "./top-nav/top-nav.component";

@NgModule({
  declarations: [
    AppComponent, TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AUTH_PROVIDERS, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
