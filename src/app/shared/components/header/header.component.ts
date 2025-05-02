import { Component } from '@angular/core';
import {TitleCasePipe} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TitleCasePipe,
    RouterOutlet, RouterLink, RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   username: string = "";
   constructor(private  userService: UserService) {
   }
   ngOnInit() {
     this.username = this.userService.getUsername();
   }
}
