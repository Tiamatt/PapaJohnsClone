import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

// models
import { IIdName } from '../shared/models/IIdName.model';
import { VariableListenerService } from '../shared/services/variableListener.service';
import { IShoppingItem } from '../shared/models/IShoppingItem.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categoryArr: IIdName[];
  countShoppingItems: number = 0;

  constructor(
    private apiService: ApiService,
    private variableListenerService: VariableListenerService
  ) { }

  ngOnInit() {
    this.onGetData();
    this.listenVariables();
  }

  onGetData(){
    this.apiService.getItemCategoryList().subscribe(
      (_data: IIdName[]) => this.categoryArr = _data,
      (_error) => console.log(_error)
    ); 
  }

  listenVariables(){
    this.variableListenerService.shoppingItemArrListener.subscribe(
      (_data: IShoppingItem[]) => {
        this.countShoppingItems = _data.length;
      }
    );
  }



}
