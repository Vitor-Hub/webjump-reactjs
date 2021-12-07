import React from 'react';
import './Shopping.scss';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import Filter from '../../components/filter/filter';
import Products from '../../components/products/products';

const Shopping = () => {

    return (
        <>
            <Header />
            <Menu />
            <div className="Shopping">
                <div className="container">
                    <Filter />
                    <Products />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Shopping;