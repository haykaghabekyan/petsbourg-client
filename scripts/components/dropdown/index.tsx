import * as React from "react";

class Dropdown extends React.Component<any, any> {

    state = {
        showDropdown: false
    };

    constructor (props) {
        super (props);

        this.handleClick = this.handleClick.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }

    handleClick (event) {
        event.preventDefault();

        this.setState({
            showDropdown: !this.state.showDropdown
        });

    }

    componentDidMount () {
        if (typeof document !== "undefined") {
            document.addEventListener("click", this.hideDropdown, {capture: true});
        }
    }

    componentWillUnmount () {
        if (typeof document !== "undefined") {
            document.removeEventListener("click", this.hideDropdown, {capture: true});
        }
    }

    hideDropdown () {
        this.setState({
            showDropdown: false
        });
    }

    render () {
        const {showDropdown} = this.state;

        return (
            <div className={"btn-group " + (showDropdown ? "show": "")}>
                <a href="#" onClick={this.handleClick} className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded={showDropdown} />
                <div className={"dropdown-menu dropdown-menu-right " + (showDropdown ? "show": "")}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Dropdown;