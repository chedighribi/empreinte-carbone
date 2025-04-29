import { Component } from '@angular/core';
import {CarbonFootprintFormComponent} from "./carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "./carbon-footprint-result/carbon-footprint-result.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    CommonModule,
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent {
  distanceKm: number = 140;
  consommationPour100Km: number = 10;
  get consommationTotalKm(): number {
    return (this.consommationPour100Km / 100) * this.distanceKm;
  }
  addDistance (){
    return this.distanceKm +=100;
  }
}
