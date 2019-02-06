import React from 'react';
import { Link } from 'react-router-dom';
import { TopSearchComponent } from './top-search';
import { ClickListener } from '../click-listener';
import { UserIcon } from '../../utils/icons/common/user';

export class PrivateHeader extends React.Component {
    state = {
        open: false,
    };

    constructor(props) {
        super (props);

        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({
            open: false,
        });
    }

    toggle(event) {
        // Open on click, enter, or space
        if (!this.props.disabled && (event.which === 13 || event.which === 32 || event.type === 'click')) {
            this.setState({
                open: !this.state.open
            });
        }
    }

    render() {
        const { user, pets } = this.props;

        return (
            <div className="header-actions">
                <TopSearchComponent />

                <div className="user-profile d-flex align-center">
                    <ClickListener onClickOutside={ this.close }>
                        <div className={`dropdown user-profile-dropdown ${ this.state.open ? 'dropdown-open' : '' }`}>
                            <div className="dropdown-header" onClick={ this.toggle } onKeyPress={ this.toggle }>
                                <div className="user-profile-avatar">
                                    <UserIcon width={ 12 } color="#ffffff" />
                                </div>
                            </div>
                            <div className="dropdown-content">
                                <div>
                                    <div className="dropdown-list-container">
                                        <h4 className="dropdown-list-title">Your pets</h4>
                                        <ul className="dropdown-list">
                                            {
                                                pets && pets.map((pet, key) => {
                                                    return (
                                                        <li className="dropdown-list-item" key={ key }>
                                                            <Link to={`/pets/${ pet._id }`}>{ pet.name }</Link>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="dropdown-list-container">
                                        <ul className="dropdown-list">
                                            <li className="dropdown-list-item">
                                                <Link to="/pet/add">Add pet</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-list-container">
                                        <ul className="dropdown-list">
                                            <li className="dropdown-list-item">
                                                <Link to={ `/users/${ user._id }` } onClick={ this.close }>My profile</Link>
                                            </li>
                                            <li className="dropdown-list-item">
                                                <Link to="/">Sign out</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ClickListener>
                    <div className="user-name">{ user.firstName }</div>
                </div>
            </div>
        );
    }
}
