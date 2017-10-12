import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { VariableListenerService } from '../../shared/services/variableListener.service'; 
import { IIdName } from '../../shared/models/IIdName.model';

@Component({
  selector: 'app-customized-item-nav',
  templateUrl: './customized-item-nav.component.html',
  styleUrls: ['./customized-item-nav.component.css', '../../shared/styles/general.css']
})
export class CustomizedItemNavComponent implements OnInit {
  navArr: IIdName[];
  selectedLinkId: number = 0;

  constructor(
    private apiService: ApiService,
    private variableListenerService: VariableListenerService
  ) {}

  ngOnInit() {
    // initial value of VariableListenerService -> customizedItemNavSelectedIdListener is 0  
    this.variableListenerService.customizedItemNavSelectedIdListener.next(0);
    this.getInitialData();
    this.listenVariables();
  }

  getInitialData(){
    this.apiService.getCustomizedCategoryList().subscribe(
      (_data: any[]) => this.navArr = _data,
      (_error) => console.log(_error)
    ); 
  }

  listenVariables(){
    this.variableListenerService.customizedItemNavSelectedIdListener.subscribe(
      (_navId: number) => { 
        this.selectedLinkId = _navId;
      }
    );
  }

  onChangeSelection(_id: number){
    this.selectedLinkId = _id;
    // assign value for VariableListenerService -> customizedItemNavSelectedIdListener
    this.variableListenerService.customizedItemNavSelectedIdListener.next(this.selectedLinkId);   
  }

  
}