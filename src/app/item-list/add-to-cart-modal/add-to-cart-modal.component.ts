import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// services
import { VariableListenerService } from '../../shared/services/variableListener.service';
// models
import { IItem } from '../../shared/models/IItem.model';
import { IShoppingItem } from '../../shared/models/IShoppingItem.model';
import { HelperService } from '../../shared/services/helper.service';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.css']
})
export class AddToCartModalComponent implements OnInit {
  @Input() selectedItem: IItem;
  shoppingItemArr: IShoppingItem[] = [];
  itemGuid: string = this.helperService.generateGuid();
  shoppingItem: IShoppingItem;
  msg: string;

  constructor(
    private variableListenerService: VariableListenerService,
    private helperService: HelperService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listenVariables();
    this.shoppingItem = {
      itemId: this.selectedItem.id,
      itemGuid: this.itemGuid,
      itemCategoryId: this.selectedItem.itemCategoryId,
      name: this.selectedItem.name,
      quantity: 1,
      price: this.selectedItem.price,
      description: ''
    };
  }

 onAddToShoppingCart(){
   let isAlreadyExist = this.shoppingItemArr.find(x=> x.itemId == this.shoppingItem.itemId && x.description == this.shoppingItem.description);
   if (typeof isAlreadyExist === 'undefined')
   {
    this.shoppingItemArr.push(this.shoppingItem);
    this.variableListenerService.shoppingItemArrListener.next(this.shoppingItemArr);
    this.msg = "Item added to your shopping cart";
   }
   else
   {
    this.msg = "You have already added this item in your shopping cart. You can change the quantity in shopping list.";
   }
   document.getElementById("openModalAlert"+this.selectedItem.id).click();
  }


  listenVariables(){
    this.variableListenerService.shoppingItemArrListener.subscribe(
      (_params: IShoppingItem[]) => {
        this.shoppingItemArr = _params;        
      }
    );
  }

  onQuantityChangedOutput(_selectedQuantity: number){
    this.shoppingItem.quantity = _selectedQuantity;
  }

}
