import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import './index.scss';
import Shopping from './pages/Shopping/Shopping';
import Error from './pages/Error/Error';
import { IViewContext } from './interfaces/IContext';

export enum PageStates {
    Home = "Home",
    Shopping = "Shopping"
}

export enum Categories {
    Tshirt = "Camisetas",
    Pants = "Calças",
    Shoes = "Calçados"
}

const view = {
    setCurrentView: () => { },
    currentView: ""
};

export const ViewContext = createContext<IViewContext>(view);

const App = () => {
    const [currentView, setCurrentView] = useState<string>(PageStates.Shopping);

    return (
        <div className="App">
            {
                currentView === PageStates.Home ?
                    <Home />
                    : currentView === PageStates.Shopping ?
                        <Shopping />
                        : <Error />
            }
        </div>
    );
};

export default App;