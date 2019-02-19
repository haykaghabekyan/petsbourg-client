import React from 'react';
import { Select } from '../../../../components/form-elements/select';
import { GENDER_OPTIONS } from '../../../../constants/gender-options';

export class Filters extends React.Component {
    input = {
        onChange: (value) => {
            console.log(value);
        },
    };

    render() {
        const { petTypes } = this.props;
        return (
            <div className="search-page-filters">
                <h3 className="search-page-filters-title">Filters</h3>

                <div className="margin-t-20">
                    <Select placeholder="Pet types" options={ petTypes } input={ this.input } />
                </div>

                <div className="margin-t-20">
                    <Select placeholder="Pet breeds" options={ [] } />
                </div>

                <div className="margin-t-20">
                    <Select placeholder="Gender" options={ GENDER_OPTIONS } input={ this.input } />
                </div>
            </div>
        );
    }
}
