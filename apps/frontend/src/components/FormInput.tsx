import React, {HTMLInputTypeAttribute} from "react";

import Styles from "../assets/styles/components/_FormInput.module.scss";

interface InputProps {
    inputType: HTMLInputTypeAttribute
    placeholder: string
    name: string
    id: string
}

export const FormInput: React.FC<InputProps> = ({inputType, placeholder, name, id}: InputProps) => {
    const [inputValue, setInputValue] = React.useState("");

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    }

    return(
        <div className={ Styles.form_input } >
            <input value={ inputValue } onChange={ handleInputValue} type={ inputType } id={ id } name={ name } placeholder={ placeholder } />
            <div className={Styles.gradient_border}></div>
        </div>
    );
}
