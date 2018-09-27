import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/other/TextFieldGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import SelectListGroup from "../common/other/SelectListGroup";

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "",
            website: "",
            location: "",
            status: "",
            skills: "",
            bio: ""
        };

        this.onChange = this.onDataChange.bind(this);
        this.onSubmit = this.formSubmit.bind(this);
    }

    onDataChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    formSubmit = e => {
        e.preventDefault();

        const data = {
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            bio: this.state.bio
        };

        this.props.createProfile(data, this.props.history);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        const errors = this.props.errors;

        const options = [
            { label: "* Select Professional Status", value: 0 },
            { label: "Developer", value: "Developer" },
            { label: "Junior Developer", value: "Junior Developer" },
            { label: "Senior Developer", value: "Senior Developer" },
            { label: "Manager", value: "Manager" },
            { label: "Student or Learning", value: "Student or Learning" },
            { label: "Instructor or Teacher", value: "Instructor or Teacher" },
            { label: "Intern", value: "Intern" },
            { label: "Other", value: "Other" }
        ];

        return (
            <div className="App">
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <Link to="/home">
                                    <button className="btn btn-light">
                                        Click here to go back
                  </button>
                                </Link>
                                <form onSubmit={this.formSubmit}>
                                    <p className="lead text-center">Create your profile</p>

                                    <SelectListGroup
                                        name="status"
                                        onChange={this.onChange}
                                        label="Status"
                                        options={options}
                                        error={errors.status}
                                        info="Give us an idea of where you are at in your career"
                                    />

                                    <TextFieldGroup
                                        placeholder=""
                                        onChange={this.onChange}
                                        name="company"
                                        type="company"
                                        label="Enter your company's name:"
                                        info="info"
                                        error={errors.company}
                                    />

                                    <TextFieldGroup
                                        placeholder=""
                                        onChange={this.onChange}
                                        name="website"
                                        type="website"
                                        label="Enter your website: "
                                        info="info"
                                        error={errors.website}
                                    />

                                    <TextFieldGroup
                                        placeholder=""
                                        onChange={this.onChange}
                                        name="skills"
                                        type="skills"
                                        label="Enter the skills:"
                                        info="Please don't make it clickbait."
                                        error={errors.skills}
                                    />

                                    <TextFieldGroup
                                        placeholder=""
                                        onChange={this.onChange}
                                        name="location"
                                        type="location"
                                        label="Enter your location:"
                                        info="info"
                                        error={errors.location}
                                    />

                                    <TextFieldGroup
                                        placeholder=""
                                        onChange={this.onChange}
                                        name="bio"
                                        type="bio"
                                        label="Enter your bio:"
                                        info="info"
                                        error={errors.bio}
                                    />

                                    <button type="submit" className="btn btn-info btn-block mt-4">
                                        Submit
                  </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
