import React from "react";

import { FormInput } from "./FormInput";

interface ProductsTypeInputsInterface {
    selectInputValue: string
}

export const ProductsTypeInputs: React.FC<ProductsTypeInputsInterface> = ({selectInputValue}: ProductsTypeInputsInterface) => {
    switch(selectInputValue) {
            case "DVD":
            return(
                <div>
                    <FormInput inputType="text" placeholder="Size (MB)" name="size" id="size"/>
                    <p>Please provide size in MB example</p>
                </div>
            );
            case "Furniture":
            return(
                <div>
                    <FormInput inputType="text" placeholder="Height" name="height" id="height" />
                    <FormInput inputType="text" placeholder="Width" name="width" id="width" />
                    <FormInput inputType="text" placeholder="Length" name="length" id="length" />
                    <p>Please provide dimensions in HxWxL</p>
                </div>
            );
            case "Book":
            return(
                <div>
                    <FormInput inputType="text" placeholder="Weight" name="weight" id="weight" />
                    <p>Please provide the weight</p>
                </div>
            );
            default:
                return <p>Choose a product</p>;
        }
}
