import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

// models
import { IIdName } from '../shared/models/IIdName.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categoryArr: IIdName[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.onGetData();
  }

  onGetData(){
    this.apiService.getItemCategoryList().subscribe(
      (_data: IIdName[]) => this.categoryArr = _data,
      (_error) => console.log(_error)
    ); 
  }



}
