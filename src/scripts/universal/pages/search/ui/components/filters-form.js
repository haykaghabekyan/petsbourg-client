import React from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { Select } from '../../../../components/form-elements/select';
import { GENDER_OPTIONS } from '../../../../constants/gender-options';
import isEqual from 'lodash/isEqual';

class FiltersComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const params = queryString.parse(this.props.location.search);

        this.props.initialize({
            petType: params.petType,
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { formValues, history } = this.props;
        const newFormValues = nextProps.formValues;
        const newParams = queryString.parse(nextProps.location.search);

        const queryParams = {
            ...newFormValues,
        };

        if (newParams.query) {
            queryParams.query = newParams.query;
        }

        if(!isEqual(formValues, newFormValues)) {
            history.push(`/search/?${ queryString.stringify(queryParams) }`)
        }
    }

    render() {
        const { petTypes, petBreeds } = this.props;

        return (
            <div className="search-page-filters">
                <h3 className="search-page-filters-title">Filters</h3>

                <Field
                    name="petType"
                    placeholder="Pet Types"
                    options={ petTypes }
                    component={ Select }
                />

                <Field
                    name="petBreed"
                    placeholder="Pet Breeds"
                    options={ petBreeds }
                    component={ Select }
                />

                <Field name="gender" placeholder="Gender" options={ GENDER_OPTIONS } component={ Select } />
            </div>
        );
    }
}

const formName = 'filtersForm';

const mapStateToProps = state => {
    return {
        formValues: getFormValues(formName)(state),
    };
};

export const FiltersForm = withRouter(connect(mapStateToProps)(reduxForm({ form: formName })(FiltersComponent)));
