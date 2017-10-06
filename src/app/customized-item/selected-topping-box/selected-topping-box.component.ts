import { Component, OnInit, Input } from '@angular/core';
// models
import { IIdName } from '../../shared/models/IIdName.model';


@Component({
  selector: 'app-selected-topping-box',
  templateUrl: './selected-topping-box.component.html',
  styleUrls: ['./selected-topping-box.component.css', '../../shared/styles/general.css']
})
export class SelectedToppingBoxComponent implements OnInit {
  @Input() selectedTopping: IIdName;
  constructor() { }

  ngOnInit() {
  }

}
