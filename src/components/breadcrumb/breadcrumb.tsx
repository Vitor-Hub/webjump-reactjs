import { useContext } from 'react';
import { ContextData, PageStates } from '../../App';
import { IContextData } from '../../interfaces/IContext';
import './breadcrumb.scss';

const Breadcrumb = () => {
    const { currentCategory, setCurrentView } = useContext<IContextData>(ContextData);

    return (
        <div className="Breadcrumb">
            <h5 onClick={() => setCurrentView(PageStates.Home)}>Página inicial &gt;</h5>
            <h5 className="bread">{currentCategory}</h5>
        </div>
    );
}

export default Breadcrumb;