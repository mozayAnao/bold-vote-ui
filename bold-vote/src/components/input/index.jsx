import React from "react";
import { InputWrapper } from "./style"

export const Input = (props) => {
    const {placeholder, onChange} = props;
    return <InputWrapper placeholder={placeholder} onChange={onChange} />
}