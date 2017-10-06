import { Component, OnInit, Input } from '@angular/core';
import { VariableListenerService } from '../../shared/services/variableListener.service'; 

@Component({
  selector: 'app-customized-item-footer',
  templateUrl: './customized-item-footer.component.html',
  styleUrls: ['./customized-item-footer.component.css']
})
export class CustomizedItemFooterComponent implements OnInit {
  // quantityArr: number[] = [];
  // selectedQuantity: string = "QTY 1";
  @Input() currentNavId: number;
  
  constructor(private variableListenerService: VariableListenerService) { }

  ngOnInit() {
    // this.fillQuantityDdl();
  }

  // fillQuantityDdl(){
  //   for(let i=1; i<11; i++ )
  //   {
  //     this.quantityArr.push(i);
  //   }
  // }

  // onChangeQuantity(_quantity: number){
  //   this.selectedQuantity = "QTY " + _quantity;
  // }

  onPreviousNav(){
    this.variableListenerService.customizedItemNavSelectedIdListenet.next(this.currentNavId - 1);
  }

  onNextNav(){
    this.variableListenerService.customizedItemNavSelectedIdListenet.next(this.currentNavId + 1);
  }

}
