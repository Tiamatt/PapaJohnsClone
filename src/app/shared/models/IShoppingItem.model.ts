export interface IShoppingItem{
    itemId: number,
    itemGuid: string, // will be guid, "Guid" type is missing in TypeScript
    itemCategoryId: number,
    name: string,
    quantity: number,
    price: number,
    description: string
}