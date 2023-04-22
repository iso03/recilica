import { Component, OnInit, NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';
import { HomePage } from './home.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
    imports:[FormsModule, CommonModule, IonicModule, HomePage, SharedModule],
    
    declarations: [],
    
})
export class HomePageModule {
    
}