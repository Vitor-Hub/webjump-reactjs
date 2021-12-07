import React, { useContext } from 'react';
import './header.scss';
import logo from '../../assets/logo.png';
import { IViewContext } from '../../interfaces/interfaces';
import { PageStates, ViewContext } from '../../App';

const Header = () => {
    const { currentView } = useContext<IViewContext>(ViewContext);

    return (
        <div className="Header">
            <div className="texts">
                <a href="www.google.com.br" className="access">Acesse sua conta</a>
                <span>ou</span>
                <a href="www.google.com.br" className="create">Cadastre-se</a>
            </div>
            <div className="headerSearch">
                <img src={logo} alt="" />
                <div className="search">
                    <input type="text" />
                    <button style={currentView === PageStates.Shopping ? {backgroundColor: "#00A8A9"} : {}}>Buscar</button>
                </div>
            </div>
        </div>
    )
}

export default Header;