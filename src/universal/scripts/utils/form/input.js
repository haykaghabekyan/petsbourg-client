import React from "react";

const Input = ({ input, meta: { touched, error }, placeholder = "", type = "text", border = true, className = "" }) => {
    return (
        <div className={ `input-container ${ className } ${ (touched && error) ? "input-container-error" : "" }` }>
            <input className={`input-item ${ border ? "" : "no-border" }`} { ...input } placeholder={ placeholder } type={ type } />
            { touched && error && <p className="input-error">{ error }</p> }
        </div>
    );
};

export default Input;
