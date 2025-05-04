import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public username = "";
  public password = "";
  public error = "";
 constructor(private userService: UserService, private router: Router) {
 }
 login() {
   this.error = "";
   if (this.username.length < 4) {
     this.error = "Le username doit faire au moins 3 caractères";
   } else if (this.password.length < 6) {
     this.error = "Le mot de passe doit faire au moins 6 caractères"
   } else {
     this.userService.login("name")
     this.router.navigate(["summary"]);
   }

 }
}
