import { Injectable } from '@angular/core';

export interface Voyage {
  distanceKm: number;
  consommationPour100Km: number;
  quantiteCO2?: number;
}
@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  voyages : Voyage[] = [
    { distanceKm: 50, consommationPour100Km: 5, quantiteCO2: 0 },
    { distanceKm: 150, consommationPour100Km: 6,quantiteCO2: 0},
    { distanceKm: 350, consommationPour100Km: 8,quantiteCO2: 0 },
    { distanceKm: 250, consommationPour100Km: 7,quantiteCO2: 0 },
    { distanceKm: 450, consommationPour100Km: 9,quantiteCO2: 0 }
  ]

  constructor() { }
  getVoyages() : Voyage[] {
    return this.voyages;
  }
  addVoyage(voyage: Voyage) {
    voyage.quantiteCO2 = this.calculateEmissions(voyage.distanceKm, voyage.consommationPour100Km);
    this.voyages.push(voyage)
  }
  calculateEmissions(distanceKm: number , consommationPour100Km: number): number {
    return (distanceKm * consommationPour100Km) / 100 * 2.3
  }
  getResumeVoyages() : Voyage  {
    let distanceKm = 0;
    let consommationPour100Km = 0;
    let quantiteCO2 =  0;
    for (const voyage of this.voyages) {
      distanceKm += voyage.distanceKm;
      consommationPour100Km += voyage.consommationPour100Km;
      quantiteCO2 += voyage.quantiteCO2 ?? 0;
    }
    return { distanceKm, consommationPour100Km, quantiteCO2 };
  }
}
