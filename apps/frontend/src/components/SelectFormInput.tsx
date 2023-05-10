import React from "react";

import Style from "../assets/styles/components/_SelectFormInput.module.scss";

interface SelectInputInterface {
    handleSelectChange: Function
}

export const SelectFormInput: React.FC<SelectInputInterface> = ({handleSelectChange}: SelectInputInterface) => {

    const handleSelectInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleSelectChange(event.target.value);
    }

    return(
        <div>
            <select className={ Style.select_input } name="products" onChange={ handleSelectInput } id="productType">
                <option value="" id=""></option>
                <option value="DVD" id="DVD">DVD</option>
                <option value="Furniture" id="Furniture">Furniture</option>
                <option value="Book" id="Book">Book</option>
            </select>
            <div className={ Style.gradient_border }></div>
        </div>
    );
}
