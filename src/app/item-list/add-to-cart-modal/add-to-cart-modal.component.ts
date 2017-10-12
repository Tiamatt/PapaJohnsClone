import { Component, OnInit, Input } from '@angular/core';
// services
import { VariableListenerService } from '../../shared/services/variableListener.service';
// models
import { IItem } from '../../shared/models/IItem.model';
import { IShoppingItem } from '../../shared/models/IShoppingItem.model';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.css']
})
export class AddToCartModalComponent implements OnInit {
  @Input() selectedItem: IItem;
  imageUrl: string;
  shoppingItemArr: IShoppingItem[] = [];

  constructor(
    private variableListenerService: VariableListenerService
  ) { }

  ngOnInit() {
    this.imageUrl = "../../../assets/itemImages/"+ this.selectedItem.itemCategoryId + "_" + this.selectedItem.id + ".jpg";
    this.listenVariables();
  }

 onAddToShoppingCart(){
    let shoppingItem: IShoppingItem = {
      itemId: this.selectedItem.id,
      name: this.selectedItem.name,
      quantity: 3,
      price: this.selectedItem.price,
      description: ''
    };
    this.shoppingItemArr.push(shoppingItem);
    this.variableListenerService.shoppingItemArrListener.next(this.shoppingItemArr);
    console.log("shoppingItemArr");
    console.log(this.shoppingItemArr);
  }

  listenVariables(){
    this.variableListenerService.shoppingItemArrListener.subscribe(
      (_params: IShoppingItem[]) => {
        this.shoppingItemArr = _params;
      }
    );
  }

}
