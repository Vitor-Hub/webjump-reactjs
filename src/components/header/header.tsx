import { useContext, useState } from 'react';
import './header.scss';
import logo from '../../assets/logo.png';
import { IContextData } from '../../interfaces/IContext';
import { PageStates, ContextData } from '../../App';

const Header = () => {
    const { currentView, allProducts, setProducts, setCurrentView } = useContext<IContextData>(ContextData);

    const [searchText, setSearchText] = useState<string>("");

    const filterBySearch = () => {
        setCurrentView(PageStates.Shopping);
        let filter: any[] = [];
        if (!!allProducts.items.length) {
            filter = allProducts.items.filter(i => i.name.toLowerCase().trim().includes(searchText.toLowerCase().trim()));
        }
        setProducts({ filters: [], items: filter })
    };

    return (
        <header className="Header">
            <div className="texts">
                <a href="www.google.com.br" className="access">Acesse sua conta</a>
                <span>ou</span>
                <a href="www.google.com.br" className="create">Cadastre-se</a>
            </div>
            <div className="headerSearch">
                <img src={logo} alt="" onClick={() => setCurrentView(PageStates.Home)}/>
                <div className="search">
                    <input onChange={(event) => setSearchText(event.target.value)} type="text" />
                    <button onClick={() => filterBySearch()} style={currentView === PageStates.Shopping ? { backgroundColor: "#00A8A9" } : {}}>Buscar</button>
                </div>
            </div>
        </header>
    )
}

export default Header;