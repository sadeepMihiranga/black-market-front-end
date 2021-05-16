import React, { Component } from 'react';

import Card from './common/card';

import { getProducts } from '../services/productService';

class ProductCart extends Component {

    state = {
        products: []
    };

    async componentDidMount() {

        const { data: products } = await getProducts();

        this.setState({ products: products.data });
    };

    render() {
        const { products } = this.state;

        return (
            <React.Fragment>
                <h1 className="mb-2">Product Price Calculator</h1>
                <div className="row px-5 pt-5">
                {
                    products.map(
                        item =>
                            <div key={item.id} className="col-md-4 mt-4 mt-sm-0 card-container">
                                <div className="card text-center product p-4 pt-5 border-2 h-100 rounded-1">
                                    <Card key={item.id} item={item} />
                                </div>
                            </div>
                    )
                }
                </div>
            </React.Fragment>
        );
    }
}

export default ProductCart;
