import { useState, createContext, useEffect } from 'react';
import Home from './pages/Home/Home';
import './index.scss';
import Shopping from './pages/Shopping/Shopping';
import Error from './pages/Error/Error';
import { IContextData } from './interfaces/IContext';
import { getCategories, getProducts } from './services/ProductsSVC';
import { IProductCategories, IProducts } from './interfaces/IProducts';
import Contato from './pages/Contato/Contato';

export enum PageStates {
    Home = "Home",
    Shopping = "Shopping",
    Contato = "Contato"
}

export enum Categories {
    Camisetas = 1,
    Calças = 2,
    Calçados = 3
}

export enum Colors {
    Preta = "#1a1818",
    Preto = "#1a1818",
    Laranja = "#e25d4c",
    Amarela = "#f88b0f",
    Cinza = "#959595",
    Azul = "#00A8A9",
    Rosa = "#bbabd5",
    Bege = "#e2dedc"
}

const view = {
    setCurrentView: () => { },
    currentView: "",
    categories: { items: [] },
    products: { filters: [], items: [] },
    allProducts: { filters: [], items: [] },
    resolveProducts: (id: number) => { },
    setProducts: () => { },
    currentCategory: ""
};

export const ContextData = createContext<IContextData>(view);

const App = () => {
    const [currentView, setCurrentView] = useState<string>(PageStates.Home);
    const [categories, setCategories] = useState<IProductCategories>({ items: [] });
    const [products, setProducts] = useState<IProducts>({ filters: [], items: [] });
    const [allProducts, setAllProducts] = useState<IProducts>({ filters: [], items: [] });
    const [currentCategory, setCurrentCategory] = useState<string>("");

    const resolveCategories = async (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await getCategories();
                setCategories(response?.data);
                resolve(response)
            } catch (error) {
                reject();
            }
        });
    }

    const resolveProducts = async (id: number): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await getProducts(id);
                setProducts(response?.data)
                resolve(response)
            } catch (error) {
                reject();
            }
        });
    }

    const resolveAllProducts = async () => {
        const tshirt = await getProducts(Categories.Camisetas);
        const pants = await getProducts(Categories.Calças);
        const shoes = await getProducts(Categories.Calçados);
        let prodObj = ({ filters: [{ color: "Cor" }], items: [...tshirt?.data.items, ...pants?.data.items, ...shoes?.data.items] });
        setAllProducts(prodObj);
    };

    useEffect(() => {
        resolveCategories();
        resolveAllProducts();
    }, []);

    return (
        <div className="App">
            <ContextData.Provider value={{ setCurrentView, currentView, categories, products, resolveProducts, setProducts, allProducts, currentCategory }}>
                {
                    currentView === PageStates.Home ?
                        <Home setCurrentCategory={setCurrentCategory} />
                        : currentView === PageStates.Shopping ?
                            <Shopping setCurrentCategory={setCurrentCategory} />
                            : currentView === PageStates.Contato ?
                                <Contato setCurrentCategory={setCurrentCategory} />
                                : <Error />
                }
            </ContextData.Provider>
        </div>
    );
};

export default App;