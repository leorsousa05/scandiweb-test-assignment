import React from "react";

import { Link, useLocation } from "react-router-dom";
import {Button} from "./Button";

export const NavbarButtons: React.FC = () => {
    const location = useLocation().pathname;
    const isAddProductsPage = location !== "/addProducts";

    if(isAddProductsPage) {
        return(
            <>
                <Link to="/addProducts"><Button>Add</Button></Link>
                <Button id="delete-product-btn">Mass Delete</Button>
            </>
        );
    } else {
        return(
            <>
                <Button id="save">Save</Button>
                <Link to="/"><Button id="cancel">Cancel</Button></Link>
            </>
        );
    }
}
