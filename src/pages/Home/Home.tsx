import React, { useContext } from 'react';
import './Home.scss';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import StandingMenu from '../../components/standingMenu/standingMenu';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import { IViewContext } from '../../interfaces/interfaces';
import { ViewContext } from '../../App';

const Home = () => {

    const { setCurrentView } = useContext<IViewContext>(ViewContext);

    return (
        <>
            <Header />
            <Menu />
            <div className="Home">
                <div className="container">
                    <div className="item1"><StandingMenu /></div>
                    <div className="item2"><Banner /></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;