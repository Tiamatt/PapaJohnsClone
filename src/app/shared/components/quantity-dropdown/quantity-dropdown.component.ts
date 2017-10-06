import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-dropdown',
  templateUrl: './quantity-dropdown.component.html',
  styleUrls: ['./quantity-dropdown.component.css']
})
export class QuantityDropdownComponent implements OnInit {
  @Input() selectedNumber: number;
  quantityArr: number[] = [];
  selectedQuantity: string = "QTY 1";

  constructor() { }

  ngOnInit() {
    this.fillQuantityDdl();
  }

  fillQuantityDdl(){
    for(let i=1; i<11; i++ )
    {
      this.quantityArr.push(i);
    }
    this.selectedQuantity = "QTY " + this.selectedNumber;
  }

  onChangeQuantity(_quantity: number){
    this.selectedQuantity = "QTY " + _quantity;
  }


}
