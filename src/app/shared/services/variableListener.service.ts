import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IShoppingItem } from '../models/IShoppingItem.model';
export class VariableListenerService{
    // type: number
    customizedItemNavSelectedIdListener = new Subject();
    
    // --- when user selects itemId, sizeId, countTopping on customized page
    // type: IParamsToRecalculatePrice
    paramsToRecalculatePriceListener = new Subject();

    // type IShoppingItem[] with initial value as empty array
    shoppingItemArrListener = new BehaviorSubject<IShoppingItem[]>([]);
}
