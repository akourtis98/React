import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../../actions/postsActions';

class PostItem extends Component {
    render() {
        const { post } = this.props;

        return (
            <div className="card mb-4" >
                <img className="card-img-top" src="http://placehold.it/350x200" alt="Card cap" />
                <div className="card-body">
                    <h2 className="card-title"><i>{post.title}</i></h2>
                    <a href={"/post/" + post._id} className="btn btn-primary">Read More &rarr;</a>
                </div>
            </div>
        );
    }
}

PostItem.defaultProps = {
    showActions: true
};

PostItem.propTypes = {
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike })(
    PostItem
);
