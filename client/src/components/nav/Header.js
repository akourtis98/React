import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, clearCurrentUser } from "../../actions/authActions";

class Header extends Component {
    onLogoutClick(e) {
        this.props.clearCurrentUser();
        this.props.logoutUser();
    }

    render() {
        let loggedIn = this.props.auth.isAuthenticated;

        const admin = (
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light ">
                    <div className="container">
                        <a className="navbar-brand em-text" href="/">
                            Enem's Blog
                        </a>

                        <div className="collapse navbar-collapse" id="navbarsExample09">
                            <div className="collapse navbar-collapse float-right" id="mobile-nav">
                                <ul className="navbar-nav ml-auto">
                                    <li>
                                        <a href="/about" className="nav-link">
                                            About
                                </a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="nav-link">
                                            Contact
                                </a>
                                    </li>
                                    <li>
                                        <a href="/resume" className="nav-link">
                                            CV
                                </a>
                                    </li>
                                    <li>
                                        <a href="/new" className="nav-link">
                                            New Post
                                </a>
                                    </li>
                                    <li>
                                        <a href="/" onClick={e => this.onLogoutClick(e)} className="nav-link">
                                            Log out
                                </a>
                                    </li>
                                    <li>
                                        <a href="/dashboard" className="nav-link">
                                            Manage posts
                                </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );

        const guestLinks = (
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light ">
                    <div className="container">
                        <a className="navbar-brand em-text" href="/">
                            Enem's Blog
                        </a>

                        <div className="collapse navbar-collapse" id="navbarsExample09">
                            <div className="collapse navbar-collapse float-right" id="mobile-nav">
                                <ul className="navbar-nav ml-auto">
                                    <li>
                                        <a href="/about" className="nav-link">
                                            About
                                </a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="nav-link">
                                            Contact
                                </a>
                                    </li>
                                    <li>
                                        <a href="/resume" className="nav-link">
                                            CV
                                </a>
                                    </li>
                                    <li>
                                        <a href="/login" className="nav-link">
                                            Login
                                </a>
                                    </li>
                                    <li>
                                        <a href="/register" className="nav-link">
                                            Register
                                </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );

        return (
            <div>
                {loggedIn
                    ? admin
                    : guestLinks}
            </div>
        );
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    clearCurrentUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser, clearCurrentUser }
)(Header);
