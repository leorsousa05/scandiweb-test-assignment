import { ReactNode } from "react";

import Style from "../assets/styles/components/_Button.module.scss"

interface ButtonProps {
    children: ReactNode | String
    id?: string
}

export const Button: React.FC<ButtonProps> = ({ children, id }: ButtonProps) => {
    return(
        <button className={ Style.button } id={ id }>{ children }</button>
    );
}
