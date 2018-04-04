import * as React from "react";

const Input = ({ input, meta: { touched, error }, placeholder = "", type = "text"}) => {
    return (
        <div className={ `input-container ${ (touched && error) ? "input-container-error" : "" }` }>
            <input className="input-item" { ...input } placeholder={ placeholder } type={ type } />
            { touched && error && <p className="input-error">{ error }</p> }
        </div>
    );
};

export default Input;
