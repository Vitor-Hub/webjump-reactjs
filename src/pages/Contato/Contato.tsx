import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import './Contato.scss';

interface IContato {
    setCurrentCategory: (category: string) => void;
}

const Contato = (props: IContato) => {
    const { setCurrentCategory } = props;

    return (
        <>
            <Header />
            <Menu setCurrentCategory={setCurrentCategory} />
            <div className="Contato">
                <h1>Desenvolvido por Vitor Santos Pereira :)</h1>
                <div className="email">
                    <h2>E-mail:</h2>
                    <h3>rj.vitorsantos@gmail.com</h3>
                </div>
                <div className="telefone">
                    <h2>Telefone:</h2>
                    <h3>(21)98202-0411</h3>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contato;