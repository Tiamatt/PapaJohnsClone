import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-dropdown',
  templateUrl: './quantity-dropdown.component.html',
  styleUrls: ['./quantity-dropdown.component.css']
})
export class QuantityDropdownComponent implements OnInit {
  @Input() initialQuantity: number;
  @Output() onQuantityChangedOutput = new EventEmitter<number>();
  quantityArr: number[] = [];
  constructor() { }

  ngOnInit() {
    this.fillQuantityDdl();
  }

  fillQuantityDdl(){
    for(let i=1; i<11; i++ )
    {
      this.quantityArr.push(i);
    }
  }

  onChangeQuantity(_quantity: number){
    this.onQuantityChangedOutput.emit(_quantity);
    this.initialQuantity = _quantity;
  }

}
