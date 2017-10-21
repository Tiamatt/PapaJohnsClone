import { Component, OnInit, Input } from '@angular/core';
// models
import { ITopping } from '../../shared/models/ITopping.model';

@Component({
  selector: 'app-topping-box',
  templateUrl: './topping-box.component.html',
  styleUrls: ['./topping-box.component.css', '../../shared/styles/general.css']
})
export class ToppingBoxComponent implements OnInit {
  @Input() topping: ITopping;
  imageUrl: string;
  constructor() { }

  ngOnInit() {
    // this.imageUrl = "../../../assets/toppingImages/"+ this.topping.toppingCategoryId + "_" + this.topping.id + ".png";
    this.imageUrl = "./assets/toppingImages/"+ this.topping.toppingCategoryId + "_" + this.topping.id + ".png";
  }

}
