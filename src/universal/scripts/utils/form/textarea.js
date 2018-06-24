import React from "react";

const Textarea = ({ input, meta: { touched, error }, placeholder = "", border = true }) => {
    return (
        <div className={ `input-container ${ (touched && error) ? "input-container-error" : "" }` }>
            <textarea className={`input-item ${ border ? "" : "no-border" }`} { ...input } placeholder={ placeholder }></textarea>
            { touched && error && <p className="input-error">{ error }</p> }
        </div>
    );
};

export default Textarea;
