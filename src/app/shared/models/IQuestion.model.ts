import { IIdName } from './IIdName.model';

export interface IQuestion{
    questionCategoryId: number,
    questionCategoryName: string,
    allowedQuestionList: IIdName[],
    selectedQuestionId: number
}