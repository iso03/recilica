import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';

/* Installer ionic module modules/shared pour avoir accès au component défini */

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule, PickupCallCardComponent
  ],
  exports: [PickupCallCardComponent]
})
export class SharedModule { }
