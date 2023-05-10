import React from "react";

import Style from "../assets/styles/components/_ProductCard.module.scss";

export const ProductCard: React.FC = () => {
    return(
        <div className={ Style.product_container }>
            <div>
                <label htmlFor="delete-checkbox"></label>
                <input type="checkbox" id="delete-checkbox" className="delete-checkbox"/>
            </div>
            <p>ngjlakngjwag</p> 
            <p>Acme Disc</p> 
            <p>1.00$</p>
            <p>Size: 700mb</p>
        </div>  
    );
}
