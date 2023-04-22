import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-pickup-calls',
  templateUrl: './pickup-calls.page.html',
  styleUrls: ['./pickup-calls.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class PickupCallsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
