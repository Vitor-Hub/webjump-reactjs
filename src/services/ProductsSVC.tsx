import axios from "axios";
import { IProductCategories, IProducts } from "../interfaces/IProducts";

export async function getCategories() {
    try {
        const response = await axios.get('http://localhost:8888/api/V1/categories/list');
        return (response);
    } catch (error) {
        console.error(error);
    }
}

export async function getProducts(id: number) {
    try {
        const response = await axios.get(`http://localhost:8888/api/V1/categories/${id}`);
        return (response);
    } catch (error) {
        console.error(error);
    }
}