import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./shared/components/footer/footer.component";
import {HeaderComponent} from "./shared/components/header/header.component";
import {CarbonFootprintComponent} from "./features/carbon-footprint/carbon-footprint.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CarbonFootprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'empreinte-carbone';
}
