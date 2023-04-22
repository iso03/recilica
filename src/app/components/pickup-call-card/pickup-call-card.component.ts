import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
  standalone:true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class PickupCallCardComponent  implements OnInit {

  @Input()
  hasHeader: Boolean = false;
  @Input()
  hasFooter: Boolean = false;
  @Input()
  status: string ="";
  @Input()
  updateAt: string = '';
  @Input()
  createAt: string = '';
  @Input()
  notes: string = '';
  @Input()
  value: string = '00,00';

  constructor() { }

  ngOnInit() {}
  //console.log("test component");
}
