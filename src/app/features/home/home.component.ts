import { Component } from '@angular/core';
import {CarbonFootprintComponent} from "../carbon-footprint/carbon-footprint.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {UserService} from "../../service/user.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 constructor(private userService: UserService) {
 }
 login() {
   this.userService.login("name")
 }
}
