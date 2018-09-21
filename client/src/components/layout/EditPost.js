import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { editPost, getPost } from '../../actions/postsActions.js';
import TextFieldGroup from '../common/TextFieldGroup.js';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup.js';

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: '',
                body: ''
            }
        }

        this.onChange = this.onFormChange.bind(this);
        this.onSubmit = this.onFormSubmit.bind(this);
    }

    componentWillMount() {
        this.props.getPost(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onFormChange = e => {
        this.setState({
            post: {
                ...this.state.post,
                [e.target.name]: e.target.value
            }
        });
    };

    onFormSubmit = e => {
        e.preventDefault();
        const data = this.state.post;
        this.props.editPost(this.props.history, this.props.match.params.id, data);
    };

    render() {
        const { errors } = this.props;
        const { post } = this.props.posts;

        return (
            <div className="App">
                <form>
                    <div className="register">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <Link to="/dashboard">
                                        <button className="btn btn-light">
                                            Click here to go back
                                        </button>
                                    </Link>
                                    <p className="lead text-center">Edit article</p>
                                    <TextFieldGroup
                                        placeholder={post.title}
                                        name="title"
                                        type="title"
                                        label="Update to the title of your choice:"
                                        info="Please don't make it clickbait."
                                        onChange={this.onChange}
                                        error={errors.title}
                                    />

                                    <TextAreaFieldGroup
                                        placeholder={post.body}
                                        name="body"
                                        rows="5"
                                        label="Update the content of the post here"
                                        info="Make sure that the content of the article is not offensive."
                                        onChange={this.onChange}
                                        error={errors.body}
                                    />
                                    <button type="button" onClick={this.onSubmit} className="btn btn-info btn-block mt-4">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

EditPost.propTypes = {
    auth: PropTypes.object.isRequired,
    editPost: PropTypes.func.isRequired,
    getPost: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    posts: state.posts,
    errors: state.errors,
});

export default connect(mapStateToProps, { editPost, getPost })(
    EditPost
);