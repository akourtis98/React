import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { submitPost } from "../../actions/postsActions.js";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: "",
                body: ""
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    createPost = e => {
        e.preventDefault();
        this.props.submitPost(this.state.post, this.props.history);
    };

    handleChangeTitle = e => {
        this.setState({
            post: {
                ...this.state.post,
                title: e.target.value
            }
        });
    };

    handleChangeBody = e => {
        this.setState({
            post: {
                ...this.state.post,
                body: e.target.value
            }
        });
    };

    render() {
        const errors = this.props.errors;

        return (
            <div className="App">
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <a href="/">
                                    <button className="btn btn-light">
                                        Click here to go back
                                     </button>
                                </a>
                                <p className="lead text-center">Write an article</p>
                                <form onSubmit={this.createPost}>
                                    <TextFieldGroup
                                        placeholder=""
                                        name="title"
                                        type="text"
                                        label="Enter the title of choice:"
                                        info="Please don't make it clickbait."
                                        onChange={this.handleChangeTitle}
                                        error={errors.title}
                                    />

                                    <TextAreaFieldGroup
                                        placeholder=""
                                        name="body"
                                        rows="5"
                                        label="Write your article here"
                                        info="Make sure that the content of the article is not offensive."
                                        onChange={this.handleChangeBody}
                                        error={errors.body}
                                    />
                                    <button type="submit" className="btn btn-info btn-block mt-4">
                                        Submit
                                    </button>
                                </form>
                                {this.state.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreatePost.propTypes = {
    auth: PropTypes.object.isRequired,
    submitPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { submitPost }
)(withRouter(CreatePost));
