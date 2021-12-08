import { IProductCategories, IProducts } from "./IProducts";

export interface IContextData {
    setCurrentView: (view: string) => void;
    currentView: string;
    categories: IProductCategories;
    products: IProducts;
    allProducts: IProducts;
    resolveProducts: (id: number) => void;
    setProducts: (product: IProducts) => void;
    currentCategory: string;
};