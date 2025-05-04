import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {CarbonFootprintComputeService} from "../../../service/carbon-footprint-compute.service";

@Component({
  selector: 'app-carbon-footprint-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,
    NgIf],
  templateUrl: './carbon-footprint-form.component.html',
  styleUrl: './carbon-footprint-form.component.css'
})
export class CarbonFootprintFormComponent {
  form!: FormGroup;
  public distanceKm = 0;
  public consommationPour100Km = 0;
  public date = "";
  constructor(private carbonFootprintComputeService: CarbonFootprintComputeService) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      'distanceKm': new FormControl(null, [Validators.required, Validators.min(1)]),
      'consommationPour100Km': new FormControl(null),
      'date': new FormControl(null, Validators.required),
    })
  }
  addVoyage(){
    console.log(this.form.value)
    this.carbonFootprintComputeService.addVoyage({
      distanceKm: this.form.value.distanceKm,
      consommationPour100Km: this.form.value.consommationPour100Km,
      date: this.form.value.date
    });
  }
}
