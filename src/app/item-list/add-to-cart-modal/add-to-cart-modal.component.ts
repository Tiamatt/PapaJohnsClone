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

  constructor(
    private variableListenerService: VariableListenerService,
    private helperService: HelperService,
    private router: Router
  ) { }

  ngOnInit() {
    //this.imageUrl = "../../../assets/itemImages/"+ this.selectedItem.itemCategoryId + "_" + this.selectedItem.id + ".jpg";
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
    this.shoppingItemArr.push(this.shoppingItem);
    this.variableListenerService.shoppingItemArrListener.next(this.shoppingItemArr);
    alert("Item added to your shopping cart");
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
