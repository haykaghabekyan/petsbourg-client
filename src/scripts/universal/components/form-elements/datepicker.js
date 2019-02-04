import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export const Datepicker = ({ input, dateFormat='DD/MM/YYYY', meta: { touched, error }, placeholder = '', border = true, className = '' }) => {
    return (
        <div className={ `input-container ${ className } ${ (touched && error) ? 'input-container-error' : '' }` }>
            <DatePicker
                { ...input }
                autoComplete="off"
                dateFormat={ dateFormat }
                selected={ input.value ? moment(input.value, dateFormat).toDate() : null }
                onChange={ (date) => { input.onChange( moment(date).format(dateFormat) ) } }
                className="input-item"
                calendarClassName="pb-datepicker"
                placeholderText={ placeholder }
            />
            { touched && error && <p className="input-error">{ error }</p> }
        </div>
    );
};
