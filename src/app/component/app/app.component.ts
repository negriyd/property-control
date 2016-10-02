import { Component } from '@angular/core';
import {Auth} from "../../service/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  constructor(private auth: Auth) {

  }

  title = 'app works!';
}