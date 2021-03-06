import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { submitPost } from "../../actions/postsActions.js";
import TextFieldGroup from "../common/other/TextFieldGroup";
import TextAreaFieldGroup from "../common/other/TextAreaFieldGroup";
import Spinner from "../common/spinner/Spinner";

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: "",
                text: ""
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
                text: e.target.value
            }
        });
    };

    render() {
        const errors = this.props.errors;

        const form = (
            <div>
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
                        name="text"
                        rows="5"
                        label="Write your article here"
                        info="Make sure that the content of the article is not offensive."
                        onChange={this.handleChangeBody}
                        error={errors.text}
                    />
                    <button type="submit" className="btn btn-info btn-block mt-4">
                        Submit
                                    </button>
                </form>
            </div>
        )
        return (
            <div className="App">
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                {this.props.loading ? <div> <Spinner /> </div> : <div> {form} </div>}
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
