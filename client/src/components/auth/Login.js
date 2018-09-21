import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }

    }


    login = e => {
        e.preventDefault();
        this.props.loginUser(this.state, this.props.history);
    };

    handleChangeEmail = e => {
        this.setState({
            email: e.target.value
        });
    }

    handleChangePassword = e => {
        this.setState({
            password: e.target.value
        });
    }


    render() {
        const { errors } = this.state;

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your account</p>
                            <form className="form-signin" onSubmit={this.login}>
                                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                                <TextFieldGroup
                                    placeholder="Email Address"
                                    name="email"
                                    type="email"
                                    label="Name"
                                    info="Email Address"
                                    onChange={this.handleChangeEmail}
                                    error={errors.email}
                                />

                                <TextFieldGroup
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    info="Password"
                                    onChange={this.handleChangePassword}
                                    error={errors.password}
                                />
                                <button type="submit" className="btn btn-info btn-block mt-4">Log in</button>
                                <small id="inputSuccessHelp" className="form-text text-muted">{this.state.message}</small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);