import React from 'react';
import './products.scss';

const Products = () => {

    return (
        <div className="Products">
            <h1>Sapatos</h1>
            <div className="items">
                <div className="item">
                    <div className="img">
                        <img src="https://i.picsum.photos/id/778/197/216.jpg?hmac=WrZw5a2251GAfXB6wFIiIeiiS3QcrvIOuV619eAF6_4" alt="" />
                    </div>
                    <h2 className="title">
                        Adidas
                    </h2>
                    <h3 className="price">
                        R$299,90
                    </h3>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default Products;