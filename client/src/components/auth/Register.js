import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/other/TextFieldGroup";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password2: ""
        };

        this.onChange = this.onDataChange.bind(this);
        this.onSubmit = this.onDataSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    onDataChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onDataSubmit = e => {
        e.preventDefault();
        this.props.registerUser(this.state, this.props.history);
    };

    render() {
        const { errors } = this.props;

        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div className="register">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 m-auto">
                                    <p className="lead text-center display-4 my-4">
                                        Create your Blog account
                                    </p>

                                    <TextFieldGroup
                                        placeholder="Email Address"
                                        name="email"
                                        type="email"
                                        label="Name"
                                        info="Email Address"
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />

                                    <TextFieldGroup
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        label="Enter password"
                                        info="Enter password"
                                        onChange={this.onChange}
                                        error={errors.password}
                                    />

                                    <TextFieldGroup
                                        placeholder="Password"
                                        name="password2"
                                        type="password"
                                        label="Enter password againasd"
                                        info="Enter password again"
                                        onChange={this.onChange}
                                        error={errors.password2}
                                    />

                                    <button type="submit" className="btn btn-info btn-block mt-4">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
