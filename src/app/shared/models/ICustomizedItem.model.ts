import { IQuestion } from './IQuestion.model';
import { ITopping } from './ITopping.model';

export interface ICustomizedItem{
    itemId: number,
    itemName: string,
    itemCategoryId: number,
    questionList: IQuestion[],
    toppingList: ITopping[]
}