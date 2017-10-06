import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// services
import { ApiService } from '../shared/services/api.service';
import { VariableListenerService } from '../shared/services/variableListener.service';
// models
import { ICustomizedItem } from '../shared/models/ICustomizedItem.model';
import { IQuestion } from '../shared/models/IQuestion.model';
import { ITopping } from '../shared/models/ITopping.model';
import { IIdName } from '../shared/models/IIdName.model';

@Component({
  selector: 'app-customized-item',
  templateUrl: './customized-item.component.html',
  styleUrls: ['./customized-item.component.css', '../shared/styles/general.css']
})

export class CustomizedItemComponent implements OnInit {
  title: string = "Waiting for API...";
  itemId: number;
  navId: number;
  itemData: ICustomizedItem;
  questionArr: IQuestion[] = [];
  toppingArr: ITopping[] = [];
  selectedToppingArr: IIdName[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private variableListenerService: VariableListenerService
  ) { } 
  
  ngOnInit() {
    this.getItemIdFromUrl();
    this.listenVariables();
  }

  getItemIdFromUrl(){
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.itemId = params['itemId'];
        this.getInitialData();
      }
    );
  }

  getInitialData(){    
    // assign title & itemData
    this.apiService.getCustomizedItem(this.itemId).subscribe(
      (_data: ICustomizedItem) => {
        this.itemData = _data;
        this.title = _data.itemName;
        this.assignQuestionArrAndToppingArr();
      },
      (_error) => console.log(_error)
    );

    // assign selectedToppingArr
    this.apiService.getSelectedToppingList(this.itemId).subscribe(
      (_data: IIdName[]) => {
        this.selectedToppingArr = _data;
      },
      (_error) => console.log(_error)
    );
  }

  listenVariables(){
    this.variableListenerService.customizedItemNavSelectedIdListenet.subscribe(
      (_navId: number) => { 
        this.navId = _navId;
        this.assignQuestionArrAndToppingArr();
      }
    );
  }

  assignQuestionArrAndToppingArr(){
    this.questionArr = [];
    this.toppingArr = [];
    if(this.itemData != null)
    {
      // get question for selected nav
      for(let q of this.itemData.questionList)
      {
        if(this.navId == 0 && q.questionCategoryId != 5)
          this.questionArr.push(q);
        else if (this.navId == 1 && q.questionCategoryId == 5) 
          this.questionArr.push(q);
      }
      // get topping for selected nav
      for(let t of this.itemData.toppingList)
      {   
        if(t.toppingCategoryId == this.navId)
        {
          this.toppingArr.push(t);
        }
      }
    }
  }

  onAddTopping(_selectedTopping:ITopping){
    let newTopping: IIdName = {
      "id": _selectedTopping.id,
      "name": _selectedTopping.name
    };
    if(this.selectedToppingArr.length > 9 )
      document.getElementById("openModalButton").click();
    else
      this.selectedToppingArr.push(newTopping);
  }

  onRemoveTopping(_selectedToppingId: number)
  { 
    let i = 0; // find and delete only first item
    for(let t of this.selectedToppingArr)
    {
      if(t.id == _selectedToppingId && i== 0)
      {
        i++;
        let index:number = this.selectedToppingArr.indexOf(t);
        this.selectedToppingArr.splice(index, 1);
      }
    }
  }
}