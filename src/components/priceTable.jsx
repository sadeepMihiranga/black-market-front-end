import React, { Component } from 'react';

import Table from "./common/table";

class PriceTable extends Component {

    columns = [
        { path: "noOfUnits", label: "Quantity" },
        { path: "price", label: "Price" }
    ]
    
    render() { 
        const { prices, onSort, sortColumn } = this.props;

        return ( 
            <Table data={ prices } columns={ this.columns } sortColumn={ sortColumn } onSort={ onSort }/>
        );
    }
}

export default PriceTable;