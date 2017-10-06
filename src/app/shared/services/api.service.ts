import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';  // need for map()

@Injectable() // need to inject build-in Http service

export class ApiService{
    private apiUrl_getItemCategoryList: string;    
    private apiUrl_getSpecialList: string;
    private apiUrl_getItemsByCategoryId: string;
    private apiUrl_getCustomizedCategoryList: string;
    private apiUrl_getCustomizedItem: string;
    private apiUrl_getSelectedToppingList: string;

    private header: Headers;

    constructor(private _http: Http) {
      this.apiUrl_getItemCategoryList = 'https://localhost:44385/api/item/categories';
      this.apiUrl_getSpecialList = 'https://localhost:44385/api/item/specials';
      this.apiUrl_getItemsByCategoryId = 'https://localhost:44385/api/item/items/';
      this.apiUrl_getCustomizedCategoryList = 'https://localhost:44385/api/item/customized/category';
      this.apiUrl_getCustomizedItem = 'https://localhost:44385/api/item/customized/item/';
      this.apiUrl_getSelectedToppingList = 'https://localhost:44385/api/item/customized/selected-topping/';
      
      this.header = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'});
    }

    // for main nav
    // returns JSON of type IIdName[]
    public getItemCategoryList = (): Observable<any> => {
        let apiUrl = this.apiUrl_getItemCategoryList;
        
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json());
    }

    // for main page content when click on "Papa Jonh's Clone" logo
    // returns JSON of type IItem[]
    public getSpecialList = (): Observable<any> => {
        let apiUrl = this.apiUrl_getSpecialList;
        
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json());
            //.do(data => console.log(data));
    }

    // for main page content based on selected nav link
    // returns JSON of type IItem[]
    public getItemListByCategoryId = (itemCategoryId: number): Observable<any> => {
        let apiUrl = this.apiUrl_getItemsByCategoryId + itemCategoryId;
            
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json());
            //.do(data => console.log(data));
    }

    // for nav on customized-item page
    // returns JSON of type IIdName[]
    public getCustomizedCategoryList = (): Observable<any> => {
        let apiUrl = this.apiUrl_getCustomizedCategoryList;
            
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json());
            //.do(data => console.log(data));
    }

    // for title, question-box and topping-box on customized-item page
    // returns JSON of type ICustomizedItem
    public getCustomizedItem = (itemId: number): Observable<any> => {
        let apiUrl = this.apiUrl_getCustomizedItem + itemId;
            
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json());
            //.do(data => console.log(data));
    }

    // for selected-topping-box on customized-item page
    // returns JSON of type IIdName[]
    public getSelectedToppingList = (itemId: number): Observable<any> => {
        let apiUrl = this.apiUrl_getSelectedToppingList + itemId;
            
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json());
            //.do(data => console.log(data));
    }

}