export interface IProductCategories {
    items: {
        id?: number,
        name: string,
        path: string,
    }[]
}

export interface IProducts {
    filters: {}[];
    items: {
        id: number,
        sku: string,
        path: string,
        name: string,
        image: string,
        price: number,
        specialPrice?: number,
        filter: [{ color: string }]
    }[];
}