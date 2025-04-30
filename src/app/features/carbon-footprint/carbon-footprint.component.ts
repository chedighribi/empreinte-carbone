import { Component } from '@angular/core';
import {CarbonFootprintFormComponent} from "./carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "./carbon-footprint-result/carbon-footprint-result.component";
import {CommonModule} from "@angular/common";
import {CarbonFootprintComputeService, Voyage} from "../../service/carbon-footprint-compute.service";

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
  voyages: Voyage[] = []
  constructor( private carbonFootprintComputeService : CarbonFootprintComputeService) {
    this.calculerTotalEtMoyenne();
    this.voyages = this.carbonFootprintComputeService.getVoyages();
  }
  calculerTotalEtMoyenne() {
    let resume = this.carbonFootprintComputeService.getResumeVoyages()
    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km / this.carbonFootprintComputeService.getVoyages().length;

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
    this.carbonFootprintComputeService.addVoyage({ distanceKm: distance, consommationPour100Km:
      consommation});
    this.calculerTotalEtMoyenne();
  }
}
