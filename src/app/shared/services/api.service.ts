import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';  // need for map()
import { IParamsToRecalculatePrice } from '../models/IParamsToRecalculatePrice.model';

@Injectable() // need to inject build-in Http service

export class ApiService{
    // api urls
    private apiUrl_base: string;
    private apiUrl_getItemCategoryList: string;    
    private apiUrl_getSpecialList: string;
    private apiUrl_getItemsByCategoryId: string;
    private apiUrl_getCustomizedCategoryList: string;
    private apiUrl_getCustomizedItem: string;
    private apiUrl_getSelectedToppingList: string;
    private apiUrl_getRecalculatedPrice: string;

    private header: Headers; // http header

    constructor(
        private _http: Http,
        private _router: Router
    ) {
      this.apiUrl_base = 'http://ydearimas-002-site1.ftempurl.com/api/item/';   
      this.apiUrl_getItemCategoryList = this.apiUrl_base + 'categories';
      this.apiUrl_getSpecialList = this.apiUrl_base + 'specials';
      this.apiUrl_getItemsByCategoryId = this.apiUrl_base + 'items/';
      this.apiUrl_getCustomizedCategoryList = this.apiUrl_base + 'customized/category';
      this.apiUrl_getCustomizedItem = this.apiUrl_base + 'customized/item/';
      this.apiUrl_getSelectedToppingList = this.apiUrl_base + 'customized/selected-topping/';
      this.apiUrl_getRecalculatedPrice = this.apiUrl_base + 'customized/recalculatedPrize/paramsToRecalculatePrice?';

      this.header = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'});
    }

    // if API gives an error, redirect to error page
    private handleError = (_error: any) => {
        this._router.navigate(['/error', _error.status]);
    }
    // if content is empty, then redirect to error page
    private contentIsEmpty(){
        this._router.navigate(['/error', 204]);
    }

    // for main nav
    // returns JSON of type IIdName[]
    public getItemCategoryList = (): Observable<any> => {
        let apiUrl = this.apiUrl_getItemCategoryList;
        
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => {
                let data = <any>response.json();
                if(data.length == 0)
                    this.contentIsEmpty();
                return data;
            })
            .catch(this.handleError.bind(this));
    }

    // for main page content when click on "Papa Jonh's Clone" logo
    // returns JSON of type IItem[]
    public getSpecialList = (): Observable<any> => {
        let apiUrl = this.apiUrl_getSpecialList;
        
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => {
                let data = <any>response.json();
                if(data.length == 0)
                    this.contentIsEmpty();
                return data;    
            })
            .catch(this.handleError.bind(this));
    }

    // for main page content based on selected nav link
    // returns JSON of type IItem[]
    public getItemListByCategoryId = (itemCategoryId: number): Observable<any> => {
        let apiUrl = this.apiUrl_getItemsByCategoryId + itemCategoryId;
            
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json()) // if empty, then returns 404
            .catch(this.handleError.bind(this));
    }

    // for nav on customized-item page
    // returns JSON of type IIdName[]
    public getCustomizedCategoryList = (): Observable<any> => {
        let apiUrl = this.apiUrl_getCustomizedCategoryList;
            
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json())
            .catch(this.handleError.bind(this));
    }

    // for title, question-box and topping-box on customized-item page
    // returns JSON of type ICustomizedItem
    public getCustomizedItem = (itemId: number): Observable<any> => {
        let apiUrl = this.apiUrl_getCustomizedItem + itemId;
            
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json())
            .catch(this.handleError.bind(this));
    }

    // for selected-topping-box on customized-item page
    // returns JSON of type IIdName[]
    public getSelectedToppingList = (itemId: number): Observable<any> => {
        let apiUrl = this.apiUrl_getSelectedToppingList + itemId;
            
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json())
            .catch(this.handleError.bind(this));
    }

    // for recalculating the price of customized item on ..
    // returns JSON of type decimal
    public getRecalculatedPrice = (params: IParamsToRecalculatePrice): Observable<any> => {
        let apiUrl = this.apiUrl_getRecalculatedPrice;
        apiUrl += "itemId=" + params.itemId + "&" + "sizeId=" + params.sizeId + "&" + "countTopping=" + params.countTopping;
        
        return this._http.get(apiUrl, {headers: this.header})
            .map((response: Response) => <any>response.json())
            .catch(this.handleError.bind(this));
    }

}