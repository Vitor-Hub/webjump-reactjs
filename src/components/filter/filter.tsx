import { useContext, useEffect } from 'react';
import { Categories, Colors, ContextData } from '../../App';
import { IContextData } from '../../interfaces/IContext';
import { getProducts } from '../../services/ProductsSVC';
import './filter.scss';

const Filter = () => {
    const { resolveProducts, setProducts, products, currentCategory } = useContext<IContextData>(ContextData);

    const getClothesFilter = async () => {
        const tshirt = await getProducts(Categories.Camisetas);
        const pants = await getProducts(Categories.Calças);
        let prodObj = ({ filters: [{ color: "Cor" }], items: [...tshirt?.data.items, ...pants?.data.items] });
        setProducts(prodObj);
    };

    let arrColors: string[] = [];
    let isUnique: boolean;

    const verifyColor = (color: string): boolean => {
        isUnique = !arrColors.filter(i => i === color).length;
        arrColors.push(color);
        return (isUnique);
    };

    const filterByColor = (color: string) => {
        let filter = products.items.filter(i => i.filter[0].color === color);
        setProducts({ filters: [], items: filter })
    };

    useEffect(() => {
        console.log("products: ", products);
    }, [products]);

    return (
        <div className="Filter">
            <h1>Filtre por</h1>
            <div className="categories">
                <h2>Categorias</h2>
                <ul>
                    <li onClick={() => getClothesFilter()}>Roupas</li>
                    <li onClick={() => resolveProducts(Categories.Calçados)}>Sapatos</li>
                    <li onClick={() => setProducts({ filters: [], items: [] })}>Acessórios</li>
                </ul>
            </div>
            <div className="colors">
                <h1>Cores</h1>
                <div className="colorsContent">
                    {products && products.items && !!products.items.length && products.items.map((item, index) => {
                        let color = item.filter[0].color;
                        return (
                            <>
                                {
                                    verifyColor(color) && color !== "Preto" && <div key={index} onClick={() => filterByColor(color)} style={{ backgroundColor: (Colors as any)[`${color}`] }} />
                                }
                            </>
                        );
                    })}
                </div>
            </div>
            <div className="type">
                <h1>tipo</h1>
                <ul>
                    <li onClick={() => setProducts({ filters: [], items: [] })}>Corrida</li>
                    <li onClick={() => setProducts({ filters: [], items: [] })}>Caminhada</li>
                    <li onClick={() => setProducts({ filters: [], items: [] })}>Casual</li>
                    <li onClick={() => setProducts({ filters: [], items: [] })}>Social</li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;