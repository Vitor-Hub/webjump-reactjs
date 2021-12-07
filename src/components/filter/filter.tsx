import React from 'react';
import './filter.scss';

const Filter = () => {

    return (
        <div className="Filter">
            <h1>Filtre por</h1>
            <div className="categories">
                <h2>Categorias</h2>
                <ul>
                    <li>Roupas</li>
                    <li>Sapatos</li>
                    <li>Acessórios</li>
                </ul>
            </div>
            <div className="colors">
                <h1>Cores</h1>
                <div className="colorsContent">
                    <div className="color1" />
                    <div className="color2" />
                    <div className="color3" />
                </div>
            </div>
            <div className="type">
                <h1>tipo</h1>
                <ul>
                    <li>Corrida</li>
                    <li>Caminhada</li>
                    <li>Casual</li>
                    <li>Social</li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;