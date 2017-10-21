import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// models
import { IItem } from '../../shared/models/IItem.model';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css']
})
export class ItemBoxComponent implements OnInit {
  @Input() item: IItem;
  imageUrl: string;
  buttonName: string = "Add to cart";

  constructor(private router: Router) { }

  ngOnInit() {
    this.imageUrl = "../../../assets/itemImages/"+ this.item.itemCategoryId + "_" + this.item.id + ".jpg";
    if(this.item.itemCategoryId == 4)
      this.buttonName = "Add & Customize"; 
  }

  onSelect(){
    if(this.item.itemCategoryId == 4)
      this.router.navigate(['/customize/' + this.item.id]);
    else
      document.getElementById("openModalButton" + this.item.id).click();
  }

}
