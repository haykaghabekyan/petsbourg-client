import * as React from "react";

const Select = ({ input, meta: { touched, error }, placeholder = "", options=[]}) => {
    return (
        <div className={ `input-container ${ (touched && error) ? "input-container-error" : "" }` }>
            <select className="select-item" { ...input }>
                <option value="" disabled>{ placeholder }</option>
                {
                    options.map(option => {
                        return <option key={ option.value } value={ option.value }>{ option.name }</option>;
                    })
                }
            </select>
            { touched && error && <p className="input-error">{ error }</p> }
        </div>
    );
};

export default Select;
