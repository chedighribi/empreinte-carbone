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
  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ]
  constructor() {
    this.calculerTotalEtMoyenne();
  }
  calculerTotalEtMoyenne() {
    let total = 0;
    let moyenne = 0;
    for (const voyage of this.voyages) {
      total += voyage.distanceKm;
      moyenne += voyage.consommationPour100Km;
    }
    this.distanceKm = total;
    this.consommationPour100Km = moyenne / this.voyages.length;
  }
  get consommationTotalKm(): number {
    return (this.consommationPour100Km / 100) * this.distanceKm;
  }
  addDistance (){
    return this.distanceKm +=100;
  }
  genererVoyage() {
    const distance = Math.floor(Math.random() * 1000) + 1 ;
    const consommation = Math.floor(Math.random() * 10) + 1;
    this.voyages.push({ distanceKm: distance, consommationPour100Km:
      consommation });
    this.calculerTotalEtMoyenne();
  }
}
