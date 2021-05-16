import React, { Component } from 'react';

import _ from "lodash";

import PriceTable from "./priceTable";
import Pagination from "./common/pagination";
import { paginate } from '../utils/paginate';
import DropDownList from './common/dropDownList';

import { getProducts, getProductPrices } from '../services/productService';

class Movie extends Component {
    state = { 
        prices: [],
        products: [],
        currentPage: 1,
        pageSize: 10,
        sortColumn: { path: "noOfUnits", order: "asc" }
    };

    async componentDidMount() {

        const { data: products } = await getProducts();

        this.setState({ products: products.data });
    };

    handlePageChange = page => {
       this.setState({ currentPage: page });
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    };

    handleProductSelect = async (productId) => {

        if(productId > 0)
        {
            const { data: prices } = await getProductPrices({ productId: productId, noOfUnits: 50});
            this.setState({ prices: prices.data.prices });
        }
        else
            this.setState({ prices: [] });           
    };


    getPageData = () => {

        const { currentPage, pageSize, prices: allPrices, sortColumn} = this.state;

        const sortedPrices = _.orderBy(allPrices, [sortColumn.path], [sortColumn.order])

        const paginatedPrices = paginate(sortedPrices, currentPage, pageSize);

        return { totalCount: allPrices.length, data: paginatedPrices };
    };

    render() { 

        const { currentPage, pageSize, products, sortColumn} = this.state;
        
        const { totalCount, data: prices } = this.getPageData();  

        return (
            <div className="row">
                <div className="col"> 
                    <DropDownList 
                        options={ products } 
                        valueProperty="productName"
                        name="select-item" 
                        onItemSelect={ this.handleProductSelect }
                    />
                    <PriceTable 
                        prices={ prices } 
                        sortColumn={ sortColumn }
                        onSort={ this.handleSort }
                    />
                    <Pagination 
                        itemsCount={ totalCount } 
                        pageSize={ pageSize } 
                        currentPage={ currentPage }
                        onPageChange={ this.handlePageChange }                
                    />
                </div>                             
            </div>   
         );
    }
}
 
export default Movie;