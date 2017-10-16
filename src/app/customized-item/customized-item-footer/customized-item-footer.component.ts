import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// services
import { VariableListenerService } from '../../shared/services/variableListener.service';

@Component({
  selector: 'app-customized-item-footer',
  templateUrl: './customized-item-footer.component.html',
  styleUrls: ['./customized-item-footer.component.css']
})
export class CustomizedItemFooterComponent implements OnInit {
  @Input() currentNavId: number;
  @Output() onCustomizedItemFooterOutput = new EventEmitter();
  selectedQuantity:number;

  constructor(
    private variableListenerService: VariableListenerService,
  ) { }

  ngOnInit() {
  }

  onPreviousNav(){
    this.currentNavId--;
    this.variableListenerService.customizedItemNavIdListener.next(this.currentNavId);
  }

  onNextNav(){
    this.currentNavId++;
    this.variableListenerService.customizedItemNavIdListener.next(this.currentNavId);
  }

  // pass here _selectedQuantity and IsAddToCartChecked // kali
  onAddToCart(){
    this.onCustomizedItemFooterOutput.emit({isAddToCartChecked: true, quantity: this.selectedQuantity});
  }

  onQuantityChangedOutput(_selectedQuantity: number){
    this.selectedQuantity = _selectedQuantity;
  }

}
