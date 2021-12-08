import { useContext, useEffect, useState } from 'react';
import { ContextData } from '../../App';
import { IContextData } from '../../interfaces/IContext';
import './products.scss';
import blocksIcon from '../../assets/9blocksIcon.png';
import lineBlocksIcon from '../../assets/lineBlocksIcon.png';
import { Dropdown, DropdownButton, Pagination } from 'react-bootstrap';

const Products = () => {
    const { products, currentCategory, setProducts } = useContext<IContextData>(ContextData);

    const [dropdownText, setDropDownText] = useState<string>("Ordenar")
    const [isNormalProductView, setIsNormalProductView] = useState<boolean>(true);
    const [currentCard, setCurrentCard] = useState([]);

    const orderByPrice = (a: any, b: any) => {
        return a.price - b.price;
    }

    const [currentNumber, setCurrentNumber] = useState<any>({
        currentPage: 1,
        cardPerPage: 8
    });

    let paginationNumbers: any = [];

    const indexOfLastPost = currentNumber.currentPage * currentNumber.cardPerPage;
    const indexOfFirstPost = indexOfLastPost - currentNumber.cardPerPage;

    const numberOfCards = products.items.length;
    const numberOfPaginations = Math.ceil(numberOfCards / currentNumber.cardPerPage);

    const reset = () => {
        setCurrentNumber({ ...currentNumber, currentPage: 1 });
    };

    useEffect(() => {
        const aux: any = [...products.items];
        setCurrentCard(aux.slice(indexOfFirstPost, indexOfLastPost));
    }, [currentNumber, products]);

    for (let i = 1; i <= numberOfPaginations; i++) {
        paginationNumbers.push(i);
    }

    useEffect(() => {
        setDropDownText("Ordenar")
    }, [products]);

    return (
        <div className="Products">
            <h1>{currentCategory}</h1>
            <div className="comboboxDiv">
                <div className="blocks">
                    <img onClick={() => setIsNormalProductView(true)} src={blocksIcon} alt="" className="blocksIcon" />
                    <img onClick={() => setIsNormalProductView(false)} src={lineBlocksIcon} alt="" className="lineBlocksIcon" />
                </div>
                <div className="dropdownDiv">
                    <h5>Ordenar por</h5>
                    <DropdownButton
                        variant='white'
                        title={dropdownText}
                        onSelect={(e) => products.items.sort(orderByPrice)}
                    >
                        <Dropdown.Item onClick={(event: any) => {
                            setDropDownText(event.target.text);
                        }}>Preço</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="items">
                {!!currentCard.length ?
                    currentCard.map((product: any, index: number) => {
                        return (
                            <div key={index} style={isNormalProductView ? {} : { flexDirection: 'row', width: '100%', margin: '0 10px 20px' }} className="item">
                                <div className="img">
                                    <img src={require(`../../assets/${product.image}`).default} alt="" />
                                </div>
                                <div className="infos">
                                    <h2 className="title">{product.name}</h2>
                                    {product.specialPrice ?
                                        <div className="specialPrice">
                                            <h3 className="newPrice">R${product.specialPrice}</h3>
                                            <h3 className="price">R${product.price}</h3>
                                        </div>
                                        :
                                        <h3 className="price">R${product.price}</h3>
                                    }
                                    <button>Comprar</button>
                                </div>
                            </div>
                        );
                    })
                    :
                    <div className="notFound">
                        <h2>Nenhum produto encontrado</h2>
                    </div>
                }
            </div>
            <div className="pagination">
                <span className="arrow" onClick={() => currentNumber.currentPage > 1 ? setCurrentNumber({ ...currentNumber, currentPage: currentNumber.currentPage - 1 }) : ""}>&lt;</span>
                {products.items && !!products.items.length &&
                    paginationNumbers.map((number: number, index: number) => {
                        return (
                            <span key={index} onClick={() => setCurrentNumber({ ...currentNumber, currentPage: number })}>
                                <a style={currentNumber.currentPage == number ? { color: "#cb0d1f" } : {}}>{number}</a>
                            </span>
                        );
                    })
                }
                <span className="arrow" onClick={() => currentNumber.currentPage < numberOfPaginations ? setCurrentNumber({ ...currentNumber, currentPage: currentNumber.currentPage + 1 }) : ""}>&gt;</span>
            </div>
        </div>
    );
}

export default Products;