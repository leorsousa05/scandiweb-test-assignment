import React from "react";

import {FormInput} from "./FormInput";
import {SelectFormInput} from "./SelectFormInput";

import Styles from "../assets/styles/components/_AddProductsForm.module.scss";
import {ProductsTypeInputs} from "./ProductsTypeInputs";

export const AddProductsForm: React.FC = () => {
    const [selectInputValue, setSelectInputValue] = React.useState("");

    const handleSelectChange = (selectValue: string) => {
        setSelectInputValue(selectValue);
    }

    return(
        <form className={ Styles.add_products_form } action="">

            <div className={ Styles.basic_inputs }>
                <FormInput inputType="text" placeholder="SKU" name="SKU" id="sku" />    
                <FormInput inputType="text" placeholder="Name" name="Name" id="name" />    
                <FormInput inputType="text" placeholder="Price" name="price" id="price" />    
            </div>

            <SelectFormInput handleSelectChange={ handleSelectChange } />

            <ProductsTypeInputs selectInputValue={ selectInputValue } />

        </form>
    );
}
