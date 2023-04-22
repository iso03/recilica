import { Component, OnInit, NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, 
    CommonModule, 
    FormsModule, SharedModule] ,
    schemas:[CUSTOM_ELEMENTS_SCHEMA], 
})

export class HomePage implements OnInit { 

  constructor() { }

  ngOnInit() {
  }

}


