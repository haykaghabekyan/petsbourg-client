import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export const Datepicker = ({ input, dateFormat='DD/MM/YYYY', meta: { touched, error }, placeholder = '', border = true, className = 'input-item' }) => {
    return (
        <div className="input-container">
            <DatePicker
                { ...input }
                placeholderText={ placeholder }
                // dateFormat={ dateFormat }
                className={`input-item ${ border ? '' : 'no-border' }`}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={ 100 }
                showMonthDropdown
                onChange={ date => { input.onChange(moment(date).format(dateFormat)) } }
            />
        </div>
    );
};
