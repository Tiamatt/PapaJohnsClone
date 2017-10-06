import { Component, OnInit, Input } from '@angular/core';
// models
import { IItem } from '../../shared/models/IItem.model';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.css']
})
export class AddToCartModalComponent implements OnInit {
  @Input() selectedItem: IItem;
  imageUrl: string;

  constructor() { }

  ngOnInit() {
    this.imageUrl = "../../../assets/itemImages/"+ this.selectedItem.itemCategoryId + "_" + this.selectedItem.id + ".jpg";
  }

}
