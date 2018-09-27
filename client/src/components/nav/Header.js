import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, clearCurrentUser } from "../../actions/authActions";
import { getCurrentProfile } from "../../actions/profileActions";

class Header extends Component {
    componentWillMount() {
        this.props.getCurrentProfile();
    }

    onLogoutClick(e) {
        this.props.clearCurrentUser();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const { user } = this.props.auth;
        const { profile } = this.props.profile;
        let hasProfile;

        Object.keys(profile).length === 0
            ? (hasProfile = false)
            : (hasProfile = true);

        const authedLinks = (
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
                                    <li>
                                        <a href="/profile/" className="nav-link">
                                            My profile
                                </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );

        const limitedLink = (
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light ">
                    <div className="container">
                        <a className="navbar-brand em-text" href="/">
                            Enem's Blog
                    </a>

                        <div className="collapse navbar-collapse" id="navbarsExample09">
                            <div className="collapse navbar-collapse float-right" id="mobile-nav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/create/profile">
                                            Create Profile
                </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="/dashboard"
                                            onClick={this.onLogoutClick.bind(this)}
                                            className="nav-link"
                                        >
                                            Log out
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
                {!isAuthenticated
                    ? guestLinks
                    : hasProfile
                        ? authedLinks
                        : limitedLink
                }
            </div>
        );
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    clearCurrentUser: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { logoutUser, clearCurrentUser, getCurrentProfile }
)(Header);
