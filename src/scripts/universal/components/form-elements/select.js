import React from 'react';
import PropTypes from 'prop-types';
import {ClickListener} from '../click-listener';

export class Select extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    border: PropTypes.bool,
    options: PropTypes.array.isRequired,
  };

  static defaultProps = {
    disabled: false,
    options: [],
    border: true,
  };

  state = {
    open: false,
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({
      open: false
    });
  }

  toggle(evt) {
    // Open on click, enter, or space
    if (!this.props.disabled && (evt.which === 13 || evt.which === 32 || evt.type === 'click')) {
      this.setState({
        open: !this.state.open,
      });
    }
  }

  handleItemClick(option) {
    this.props.input.onChange(option.value);

    this.setState({
      open: false,
    });
  }

  render() {
    const {options, input = {}, meta: {touched, error} = {}, disabled = false, border, className = ''} = this.props;
    const {open} = this.state;

    let placeholder = this.props.placeholder;

    if (input.value) {
      const option = options.find(opt => opt.value === input.value);

      if (option) {
        placeholder = option.name;
      }
    }

    return (
      <ClickListener onClickOutside={this.close}>
        <div className={`select-container ${className} ${(touched && error) ? 'select-error' : ''}`}>
          <ul className={`select ${open ? 'select-open' : ''}`}>
            <li
              className={`select-text ${disabled ? 'select-disabled' : ''} ${border ? '' : 'no-border'}`}
              onClick={this.toggle}
              onKeyPress={this.toggle}
            >
              <input type="hidden" value={input.value}/>
              {placeholder}
            </li>
            <li>
              <ul className="select-list">
                {
                  options.map(option => {
                    return (
                      <li key={option.name} className="select-item" onClick={() => this.handleItemClick(option)}>
                        {option.name}
                      </li>
                    );
                  })
                }
              </ul>
            </li>
          </ul>
          {touched && error && <p className="select-error-message">{error}</p>}
        </div>
      </ClickListener>
    );
  }
}
