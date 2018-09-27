import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../../actions/authActions";
import { getCurrentProfile } from "../../actions/profileActions";

class Limbo extends Component {
    componentWillMount() {
        this.props.getCurrentProfile();
        this.props.clearErrors();
    }

    render() {
        const { profile } = this.props.profile;
        const { user } = this.props.auth;

        let dashboardContent;
        if (Object.keys(profile).length === 0) {
            dashboardContent = (
                <div>
                    Welcome, {user.username}
                    <hr />
                    <h4> Seems like you havent created a profile yet. </h4>
                    <div>
                        <a href="/create/profile">
                            <button>
                                create one here
                            </button>
                        </a>
                    </div>
                </div>
            );
        } else if (profile) {
            this.props.history.push("/home");
        }

        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Dashboard</h1>
                        </div>
                        {dashboardContent}
                    </div>
                </div>
            </div>
        );
    }
}

Limbo.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { getCurrentProfile, clearErrors }
)(Limbo);
