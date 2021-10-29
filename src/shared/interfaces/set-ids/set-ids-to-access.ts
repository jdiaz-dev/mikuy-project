export interface ISetIdsToAccessTheAccountId {
    accountId: string;
}

export interface ISetIdsToAccessTheBusiness extends ISetIdsToAccessTheAccountId {
    businessId: string;
}

export interface ISetIdsToAccessTheMenu extends ISetIdsToAccessTheBusiness {
    menuId: string;
}

export interface ISetIdsToAccessTheCategory extends ISetIdsToAccessTheMenu {
    categoryId: string;
}

export interface ISetIdsToAccessTheItem extends ISetIdsToAccessTheCategory {
    itemId: string;
}
