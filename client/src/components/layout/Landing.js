import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/limbo");
        }
    }

    render() {
        return (
            <div>
                {/* <!-- Landing --> */}
                <div className="landing">
                    <div className="dark-overlay landing-inner text-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="display-3 mb-4">My blog</h1>
                                    <p className="lead"> Create articles </p>
                                    <hr />
                                    <a href="/register" className="btn btn-lg btn-info mr-2">
                                        Sign Up
                  </a>
                                    <a href="/login" className="btn btn-lg btn-light">
                                        Login
                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Landing.propTypes = {
    loading: PropTypes.object,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    loading: state.loading,
    auth: state.auth
});

export default connect(mapStateToProps)(Landing);
