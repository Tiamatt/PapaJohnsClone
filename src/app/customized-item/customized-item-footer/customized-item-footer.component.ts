import { Component, OnInit, Input } from '@angular/core';
import { VariableListenerService } from '../../shared/services/variableListener.service'; 
import { ApiService } from '../../shared/services/api.service';
import { IParamsToRecalculatePrice } from '../../shared/models/IParamsToRecalculatePrice.model';

@Component({
  selector: 'app-customized-item-footer',
  templateUrl: './customized-item-footer.component.html',
  styleUrls: ['./customized-item-footer.component.css']
})
export class CustomizedItemFooterComponent implements OnInit {
  @Input() currentNavId: number;
  paramsToRecalculatePrice: IParamsToRecalculatePrice;

  constructor(
    private variableListenerService: VariableListenerService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.listenVariables();
  }

  onPreviousNav(){
    this.variableListenerService.customizedItemNavSelectedIdListener.next(this.currentNavId - 1);
  }

  onNextNav(){
    this.variableListenerService.customizedItemNavSelectedIdListener.next(this.currentNavId + 1);
  }

  onAddToCart(){
    this.apiService.getRecalculatedPrice(this.paramsToRecalculatePrice).subscribe(
      (_data: number) => {
        console.log("new price");
        console.log(_data);
      },
      (_error) => console.log(_error)
    ); 
  }

  listenVariables(){
    this.variableListenerService.paramsToRecalculatePriceListener.subscribe(
      (_params: IParamsToRecalculatePrice) => {
        this.paramsToRecalculatePrice = _params;
      }
    );
  }

}
