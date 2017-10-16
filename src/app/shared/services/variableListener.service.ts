import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IShoppingItem } from '../models/IShoppingItem.model';
export class VariableListenerService{
    // type: number
    customizedItemNavIdListener = new Subject();
    
    // type IShoppingItem[] with initial value as empty array
    shoppingItemArrListener = new BehaviorSubject<IShoppingItem[]>([]);
}
