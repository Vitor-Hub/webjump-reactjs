import React, { useContext } from 'react';
import './Home.scss';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import StandingMenu from '../../components/standingMenu/standingMenu';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import { IContextData } from '../../interfaces/IContext';
import { ContextData } from '../../App';

interface IHome {
    setCurrentCategory: (category: string) => void;
}

const Home = (props: IHome) => {
    const { setCurrentCategory } = props;

    const { setCurrentView } = useContext<IContextData>(ContextData);

    return (
        <>
            <Header />
            <Menu setCurrentCategory={setCurrentCategory} />
            <div className="Home">
                <div className="container">
                    <div className="item1"><StandingMenu  setCurrentCategory={setCurrentCategory} /></div>
                    <div className="item2"><Banner /></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;