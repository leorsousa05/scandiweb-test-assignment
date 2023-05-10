import React from "react";
import Style from "../assets/styles/components/_ProductList.module.scss"

import { ProductCard } from "./ProductCard";

export const ProductList: React.FC = () => {
    return(
        <section className={ Style.product_list } >
            <div className={ Style.wrapper }>
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard /> 
            </div>
        </section>
    );
}
