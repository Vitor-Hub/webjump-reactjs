import { useContext } from 'react';
import { Categories, ContextData, PageStates } from '../../App';
import { IContextData } from '../../interfaces/IContext';
import './standingMenu.scss';

interface IStandingMenu {
    setCurrentCategory: (category: string) => void;
}

const StandingMenu = (props: IStandingMenu) => {

    const { resolveProducts, setCurrentView, categories } = useContext<IContextData>(ContextData);

    const getItems = (id: number) => {
        setCurrentView(PageStates.Shopping);
        resolveProducts(id);
    };

    const { setCurrentCategory } = props;

    return (
        <div className="StandingMenu">
            <ul>
                <li onClick={() => setCurrentView(PageStates.Home)}>Página Inicial</li>
                {!!categories.items.length && categories.items.map((item, index) => {
                    return (
                        <li key={index} onClick={() => {
                            getItems((Categories as any)[item.name]);
                            setCurrentCategory(item.name);
                        }
                        }>{item.name}</li>
                    );
                })}
                <li onClick={() => setCurrentView(PageStates.Contato)}>Contato</li>
            </ul>
        </div>
    )
}

export default StandingMenu;