import PropTypes from "prop-types";
import React from "react";
import ClickListener from "./click-listener";

class Dropdown extends React.Component {

    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ""
    };

    state = {
        open: false,
    };

    constructor (props) {
        super (props);

        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
    }

    close () {
        this.setState({
            open: false
        });
    }

    toggle (evt) {
        if (this.props.disabled) {
            return;
        }

        // Open on click, enter, or space
        if (evt.which === 13 || evt.which === 32 || evt.type === 'click') {
            this.setState({
                open: !this.state.open
            });
        }
    }

    render () {
        const {Header, Content, className} = this.props;

        return (
            <ClickListener onClickOutside={this.close}>
                <div className={`dropdown ${className} ${ this.state.open ? "dropdown-open" : "" }`}>
                    <div className="dropdown-header" onClick={this.toggle} onKeyPress={this.toggle}>
                        <Header />
                    </div>
                    <div className="dropdown-content">
                        <Content />
                    </div>
                </div>
            </ClickListener>
        );
    }

}

export default Dropdown;
