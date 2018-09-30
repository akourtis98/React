import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../../actions/postsActions';
import CommentItem from './CommentItem';

class Comments extends Component {
    onDeleteClick(postId, commentId) {
        this.props.deleteComment(postId, commentId);
    }

    render() {
        const { user } = this.props.auth;

        return (
            <div>
                {this.props.comments.map(comment => (
                    <CommentItem
                        name={comment.name}
                        date={comment.date}
                        text={comment.text}
                    />
                ))}
            </div>
        )
    }
}

Comments.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, { deleteComment })(Comments);