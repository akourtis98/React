import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../../actions/postsActions';
import WholeArticle from './WholeArticle';
import Spinner from "../spinner/Spinner";

class Post extends Component {
    componentWillMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render() {
        const post = this.props.posts.post;
        const dsiplayArticle = (
            <div>
                <WholeArticle
                    title={post.title}
                    body={post.body}
                />
            </div>
        )
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="col-md-12">
                        {this.props.loading || this.props.posts.post === null ? <div> <Spinner /> </div> : <div> {dsiplayArticle} </div>}
                    </div>
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    posts: PropTypes.object.isRequired,
    getPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps, { getPost })(
    Post
);
