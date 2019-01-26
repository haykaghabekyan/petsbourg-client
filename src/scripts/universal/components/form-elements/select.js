import PropTypes from 'prop-types';
import React from 'react';
import { ClickListener } from '../click-listener';

export class Select extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        border: PropTypes.bool,
    };

    static defaultProps = {
        disabled: false,
        options: [],
        border: true,
    };

    constructor(props) {
        super(props);

        let placeholder = props.placeholder;

        if(props.input !== "") {
            const option = props.options.find(option => option.value === props.input.value);

            if (option) {
                placeholder = option.name;
            }
        }

        this.state = {
            open: false,
            placeholder: placeholder,
        };

        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({
            open: false
        });
    }

    toggle(evt) {
        if(this.props.disabled) {
            return;
        }

        // Open on click, enter, or space
        if(evt.which === 13 || evt.which === 32 || evt.type === 'click') {
            this.setState({
                open: !this.state.open,
            });
        }
    }

    handleItemClick(option) {
        this.props.input.onChange(option.value);

        this.setState({
            open: false,
            placeholder: option.name,
        });
    }

    render() {
        const { options, input, meta: { touched, error }, disabled, border, className = "" } = this.props;
        const { placeholder, open } = this.state;

        return (
            <ClickListener onClickOutside={this.close}>
                <div className={`select-container ${ className } ${ (touched && error) ? "select-error" : "" }`} disabled={ disabled }>
                    <ul className={`select ${ open ? "select-open" : "" }`}>
                        <li className={`select-text ${ border ? "" : "no-border" }`} onClick={this.toggle} onKeyPress={this.toggle}>
                            <input type="hidden" value={ input.value } />
                            { placeholder }
                        </li>
                        <li>
                            <ul className="select-list">
                                {options.map(option => <li key={option.name} className="select-item" onClick={() => this.handleItemClick(option)}>{option.name}</li>)}
                            </ul>
                        </li>
                    </ul>
                    { touched && error && <p className="select-error-message">{ error }</p> }
                </div>
            </ClickListener>
        );
    }
}
