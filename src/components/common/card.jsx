import React from 'react';
import Joi from 'joi-browser';

import Form from './form';

import { getOrderPriceForAProduct } from '../../services/productService';

class Card extends Form {
    state = {
        data: { cartons: 0, singleUnits: 0 },
        genres: [],
        errors: {},
        calculatedPrice: 0.0,
        item: {}
    };

    schema = {
        id: Joi.string(),
        cartons: Joi.number().required().min(0).label("Cartons"),
        singleUnits: Joi.number().required().min(0).label("Single Units")
    };

    doSubmit = async () => {

        const { cartons, singleUnits } = this.state.data;

        const { data: response } = await getOrderPriceForAProduct({ productId: this.props.item.id, noOfCartons: cartons, noOfSingleUnits: singleUnits });

        this.setState({ calculatedPrice: response.data.price });
    };

    render() {

        const { productName, imageUrl } = this.props.item;

        return (
            <div>
                <h4>{productName}</h4>
                <div className="card-image-div">
                    <img className="card-image img-fluid d-block mx-auto" src={ imageUrl } alt="Pilot Aviator Glasses Gear Image"></img>
                </div>            
                
                <form onSubmit={this.handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-sm-6">
                            {this.renderInput("cartons", "No of Cartons", "number")}
                        </div>
                        <div className="col-sm-6">
                            {this.renderInput("singleUnits", "No of Single Units", "number")}
                        </div>
                    </div>
                    {this.renderButton("Calculate")}
                    <div className="row mt-3">
                        <label>Total price : { this.state.calculatedPrice }</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default Card;