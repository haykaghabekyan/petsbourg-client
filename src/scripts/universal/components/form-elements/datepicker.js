import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class Input extends React.Component {
    render() {
        return <input { ...this.props } />;
    }
}

export class Datepicker extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { input, format='DD/MM/YYYY', meta: { touched, error }, placeholder = '', border = true, className = 'input-item' } = this.props;

        return (
            <div className="input-container">
                <DatePicker
                    onChange={this.onChange}
                    { ...input }
                    className={ className }
                />
            </div>
        );
    }
}
