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
import { IParamsToRecalculatePrice } from '../shared/models/IParamsToRecalculatePrice.model';
import { IShoppingItem } from '../shared/models/IShoppingItem.model';
import { HelperService } from '../shared/services/helper.service';

@Component({
  selector: 'app-customized-item',
  templateUrl: './customized-item.component.html',
  styleUrls: ['./customized-item.component.css', '../shared/styles/general.css']
})

export class CustomizedItemComponent implements OnInit {
  title: string = "Waiting for API..."; // initial title. Will change to itemName after calling API
  itemIdFromQueryString: number; // get itemId from router url
  navId: number; // 0 - "Size&Crust", 1- "Cheeses", 2 - "Meats", 3 -"Veggies"
  itemData: ICustomizedItem; // get from API
  questionArr: IQuestion[] = []; // get from API, all questions
  toppingArr: ITopping[] = []; // get from API, all toppings
  selectedToppingArr: IIdName[] = []; // get from API, selected toppings
  selectedSize: number; // get from API
  selectedQuantity: number = 1;
  recalculatedPrice: number;

  shoppingItemArr: IShoppingItem[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private variableListenerService: VariableListenerService,
    private helperService: HelperService
  ) { } 
  
  ngOnInit() {
    this.getItemIdFromUrl(); // calls getInitialData()
    this.listenVariables();  // calls assignQuestionArrAndToppingArr()
  }

  getItemIdFromUrl(){
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.itemIdFromQueryString = params['itemId'];
        this.getInitialData();
      }
    );
  }

  getInitialData(){    
    // assign title & itemData
    this.apiService.getCustomizedItem(this.itemIdFromQueryString).subscribe(
      (_data: ICustomizedItem) => {
        this.itemData = _data;
        this.title = _data.itemName;
        this.assignQuestionArrAndToppingArr();        
      },
      (_error) => console.log(_error)
    );

    // assign selectedToppingArr
    this.apiService.getSelectedToppingList(this.itemIdFromQueryString).subscribe(
      (_data: IIdName[]) => {
        if(_data!=null)
          this.selectedToppingArr = _data;
      },
      (_error) => console.log(_error)
    );
  }

  listenVariables(){
    // lesten how navigation is changing // "Size&Crust", "Cheeses", "Meats", "Veggies"
    this.variableListenerService.customizedItemNavIdListener.subscribe(
      (_navId: number) => {
        this.navId = _navId;
        this.assignQuestionArrAndToppingArr();
      }
    );
    // listen how shoppingItemArr changes
    this.variableListenerService.shoppingItemArrListener.subscribe(
      (_params: IShoppingItem[]) => {
        this.shoppingItemArr = _params;        
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

        // get pre-selected sizeId  
        if(q.questionCategoryId == 2)
          this.selectedSize = q.selectedQuestionId;  
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
    {
      this.selectedToppingArr.push(newTopping);
    }
  }

  onRemoveTopping(_selectedToppingIndex: number){ 
      this.selectedToppingArr.splice(_selectedToppingIndex, 1);
  }

  onCustomizedItemFooterOutput($event){
    if($event.isAddToCartChecked == true)
    {
      this.selectedQuantity = $event.quantity;
      this.onRecalculatePrice(); // calls onAddToShoppingList();
    }
  }

  onRecalculatePrice()
  {
    let paramsToRecalculatePrice = {
        itemId: this.itemData.itemId,
        sizeId: this.selectedSize,
        countTopping: this.selectedToppingArr.length
       };
    this.apiService.getRecalculatedPrice(paramsToRecalculatePrice).subscribe(
      (_data: number) => {
        this.recalculatedPrice = _data;
        this.onAddToShoppingList();
      },
      (_error) => console.log(_error)
    );
  }

  onAddToShoppingList()
  {
    let shoppingItem: IShoppingItem = {
      itemId: this.itemData.itemId,
      itemGuid: this.helperService.generateGuid(),
      itemCategoryId: this.itemData.itemCategoryId,
      name: this.itemData.itemName,
      quantity: (this.selectedQuantity == null)? 1: this.selectedQuantity,
      price: this.recalculatedPrice,
      description: this.getDescription()
    };
    this.shoppingItemArr.push(shoppingItem);
    this.variableListenerService.shoppingItemArrListener.next(this.shoppingItemArr);
    alert("Item added to your shopping cart");
  }

  getDescription(){
    let desc = '';
    for(var t of this.selectedToppingArr)
    {
      desc += t.name + ' | '; 
    }
    return desc;
  }

}