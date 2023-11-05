import { Component, OnInit } from '@angular/core';
import { Plants } from '../plants';
import { ViveroService } from '../vivero.service';

@Component({
  selector: 'app-vivero-list',
  templateUrl: './vivero-list.component.html',
  styleUrls: ['./vivero-list.component.css']
})
export class ViveroListComponent implements OnInit {

  plants: Array<Plants> = [];
  totalInt: number = 0;
  totalExt: number = 0;

  constructor(private viveroService: ViveroService) { }

  getPlants(): void {
    this.viveroService.getPlants().subscribe((plants) => {
      this.plants = plants;
    })
  }

  getTotals(): void {
    this.viveroService.getPlants().subscribe((plants) => {
      this.plants = plants;

      for (const plantsInt of plants) {
        if (plantsInt.tipo === 'Interior') this.totalInt++;
      }

      for (const plantsExt of plants) {
        if (plantsExt.tipo === 'Exterior') this.totalExt++;
      }

    })
  }

  ngOnInit() {
    this.getPlants();
    this.getTotals();
  }

}
