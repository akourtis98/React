import React, { Component } from 'react';
import PropTypes from "prop-types";
import { getProfileByUsername } from '../../actions/profileActions';
import { connect } from 'react-redux';

class MyProfile extends Component {
    componentWillMount() {
        this.props.getProfileByUsername(this.props.match.params.username);
    }

    render() {
        const { profile } = this.props.profile;

        return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="profile">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src="http://placehold.it/350x200" className="img-thumbnail" alt="img" />
                                </div>
                                <div className="col-lg-8">
                                    <ul>
                                        <li><strong>Copany: </strong>{profile.company}</li>
                                        <li><strong>Website: </strong>{profile.website}</li>
                                        <li><strong>Location:</strong>{profile.location}</li>
                                        <li><strong>Profession: </strong>{profile.status}</li>
                                    </ul>
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card friends">
                            <div className="card-header">
                                <h3 className="card-title">Actions </h3>
                            </div>
                            <div className="card-body">
                                <div className="clearfix"></div> <a className="btn btn-primary" href="/">View All Friends</a>
                                <div className="clearfix"></div> <a className="btn btn-primary" href="/">View All Friends</a>
                                <div className="clearfix"></div> <a className="btn btn-primary" href="/">View All Friends</a>
                                <div className="clearfix"></div> <a className="btn btn-primary" href="/">View All Friends</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

MyProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    getProfileById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default (connect(mapStateToProps, { getProfileByUsername }))(MyProfile);

