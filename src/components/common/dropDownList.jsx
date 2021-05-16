import React from 'react';

const DropDownList = ({ options, name, valueProperty, onItemSelect }) => {

    return ( 
        <div className="form-group mb-5">
            <select id={ name } name={ name } className="form-select" onChange={(e) => onItemSelect(e.currentTarget.value)} >
                <option key={0} value={0}>Select a product</option>
                { 
                    options.map(
                        option => 
                        <option key={option.id} value={option.id}>{option[valueProperty]}</option>
                    ) 
                }
            </select>
        </div>
    );
}
 
export default DropDownList;
