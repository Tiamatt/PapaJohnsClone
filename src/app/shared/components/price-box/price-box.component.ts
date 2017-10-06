import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-box',
  templateUrl: './price-box.component.html',
  styleUrls: ['./price-box.component.css']
})
export class PriceBoxComponent implements OnInit {
  @Input() price: number;
  
  constructor() { }

  ngOnInit() {
  }

}
