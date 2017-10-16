import { Component, OnInit } from '@angular/core';
// services
import { VariableListenerService } from '../shared/services/variableListener.service';
// models
import { IShoppingItem } from '../shared/models/IShoppingItem.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css', '../shared/styles/general.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingItemArr: IShoppingItem[];
  quantityOfClickedItem: number;
  subtotal: number;
  constructor(private variableListenerService: VariableListenerService) { }

  ngOnInit() {
    this.listenVariables();
    this.subtotal = this.calculateSubtotal();
  }

  listenVariables(){
    this.variableListenerService.shoppingItemArrListener.subscribe(
      (_params: IShoppingItem[]) => {
        this.shoppingItemArr = _params;
      }
    );
  }

  onQuantityChangedOutput(_selectedQuantity: number){
    this.quantityOfClickedItem = _selectedQuantity;
  }

  onQuantityDropDownClick(_selectedItem: IShoppingItem)
  {
    // modify quantity of selected item
    this.shoppingItemArr.find(x=> x.itemId == _selectedItem.itemId && x.description == _selectedItem.description)
    .quantity = this.quantityOfClickedItem;
    this.variableListenerService.shoppingItemArrListener.next(this.shoppingItemArr);
    this.subtotal = this.calculateSubtotal();
  }
  onRemoveItem(_selectedItem: IShoppingItem)
  {
    // remove selected item
    let index = this.shoppingItemArr.indexOf(_selectedItem);
    if (index > -1)
      this.shoppingItemArr.splice(index, 1);
    this.variableListenerService.shoppingItemArrListener.next(this.shoppingItemArr);
    this.subtotal = this.calculateSubtotal();
  }

  calculateSubtotal(){
    let sum:number = 0;
    for(var item of this.shoppingItemArr)
    {
      sum += item.price*item.quantity;
    }
    return sum;
  }

}
