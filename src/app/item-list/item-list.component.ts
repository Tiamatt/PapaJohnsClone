import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { IItem } from '../shared/models/IItem.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css', '../shared/styles/general.css']
})
export class ItemListComponent implements OnInit {
  title: string = "Waiting for API...";
  itemArr: IItem[];
  categoryId: number;
  carouselImageUrlArr = ['./assets/carouselImages/main_1.jpg', './assets/carouselImages/main_2.jpg'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.categoryId = params['categoryId'];
        this.onGetData();
      }
    );
  }

  onGetData(){
    if(this.categoryId != null)
    {
      this.apiService.getItemListByCategoryId(this.categoryId).subscribe(
        (_data: IItem[]) => {
          this.itemArr = _data;
          this.title = "Papa's " + this.itemArr[0].itemCategoryName;
        },
        (_error) => console.log(_error)
      ); 
    }
    else
    {
      this.apiService.getSpecialList().subscribe(
        (_data: IItem[]) => {
          this.itemArr = _data; 
          this.title = "Papa's " + this.itemArr[0].itemCategoryName;
        },
        (_error) => console.log(_error)
      ); 
    }
  }

}
