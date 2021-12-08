import './Shopping.scss';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import Filter from '../../components/filter/filter';
import Products from '../../components/products/products';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';

interface IShopping {
    setCurrentCategory: (category: string) => void;
}

const Shopping = (props: IShopping) => {
    const { setCurrentCategory } = props;

    return (
        <>
            <Header />
            <Menu setCurrentCategory={setCurrentCategory} />
            <div className="Shopping">
                <Breadcrumb />
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