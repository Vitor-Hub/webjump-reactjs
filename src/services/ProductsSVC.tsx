import axios from "axios";

export async function getProducts() {
    try {
        const response = await axios.get('http://localhost:8888/api/V1/categories/list');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}