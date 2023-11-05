import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViveroListComponent } from './vivero-list/vivero-list.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ViveroListComponent],
  declarations: [ViveroListComponent]
})
export class ViveroMainModule { }
