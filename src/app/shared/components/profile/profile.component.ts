import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  username: string = "";
  constructor(private route: ActivatedRoute) {
    let username: string| null  = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.username = username;
    }
  }
}
