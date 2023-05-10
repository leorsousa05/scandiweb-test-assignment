import React from "react";
import Style from "../assets/styles/components/_navbar.module.scss";

import {NavbarButtons} from "./NavbarButtons";

export const Navbar: React.FC = () => {

    return(
        <header className={ Style.header }>
            <div className={ Style.wrapper }>
                <h2>Product List</h2>
                <div className={ Style.buttons_container }>
                    <NavbarButtons />
                </div>
            </div>
        </header>
    );
}
