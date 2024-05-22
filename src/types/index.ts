export type ProductType = {
    id: number;
    title: string,
    quantity: string,
    category: string,
    createdAt: string;
}

export type CategoryType = {
    id: number;
    title: string,
    description: string
}


export type ProductsType = [] | ProductType[];
export type CategoriesType = [] | CategoryType[];