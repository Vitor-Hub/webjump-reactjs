import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { PageStates, ContextData, Categories } from '../../App';
import { IContextData } from '../../interfaces/IContext';
import './menu.scss';

interface IShopping {
    setCurrentCategory: (category: string) => void;
}

const Menu = (props: IShopping) => {
    const { setCurrentView, categories, resolveProducts } = useContext<IContextData>(ContextData);

    const { setCurrentCategory } = props;

    const getItems = (id: number) => {
        setCurrentView(PageStates.Shopping);
        resolveProducts(id);
    };

    return (
        <div className="Menu">
            <Navbar bg="#cb0d1f" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => setCurrentView(PageStates.Home)}>Página Inicial</Nav.Link>
                            {!!categories.items.length && categories.items.map((item, index) => {
                                return (
                                    <Nav.Link key={index} onClick={() => {
                                        getItems((Categories as any)[item.name]);
                                        setCurrentCategory(item.name);
                                    }}>{item.name}</Nav.Link>
                                );
                            })}
                            <Nav.Link onClick={() => setCurrentView(PageStates.Contato)}>Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;