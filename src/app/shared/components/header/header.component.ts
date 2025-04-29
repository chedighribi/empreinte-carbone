import { Component } from '@angular/core';
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   prenom: string = "chady";
}
