import React from 'react';

export const Input = ({ input, meta: { touched, error }, placeholder = '', type = 'text', border = true, className = '', autoComplete = 'on' }) => {
    return (
        <div className={ `input-container ${ className } ${ (touched && error) ? 'input-container-error' : '' }` }>
            <input className={`input-item ${ border ? '' : 'no-border' }`} autoComplete={ autoComplete } { ...input } placeholder={ placeholder } type={ type } />
            { touched && error && <p className="input-error">{ error }</p> }
        </div>
    );
};
