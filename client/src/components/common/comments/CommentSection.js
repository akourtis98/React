import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comments from './Comments';
import TextAreaFieldGroup from '../other/TextAreaFieldGroup';
import { addComment } from '../../../actions/postsActions';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const { user } = this.props.auth;

        const newComment = {
            text: this.state.text,
            name: user.name,
        };

        this.props.addComment(this.props.id, newComment);
        this.setState({ text: '' });
    }

    render() {
        const { errors } = this.state;

        return (

            <div>
                <div className="container">
                    <div className="row">
                        <h4 className="mb-2">Write a comment:</h4>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <TextAreaFieldGroup
                                        placeholder="Reply to post"
                                        name="text"
                                        rows="5"
                                        cols="100"
                                        errors={errors.text}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-dark">
                                    Submit
                            </button>
                            </form>
                        </div>

                        {this.props.comments != null ? <Comments postid={this.props.id} comments={this.props.comments} /> : ""}
                    </div>
                </div>
            </div>
        )
    }
}

CommentSection.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { addComment })(CommentSection);
