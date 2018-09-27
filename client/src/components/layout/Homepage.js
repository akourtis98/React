import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllposts } from '../../actions/postsActions';
import Spinner from "../common/spinner/Spinner";
import PostsFeed from '../common/post/PostsFeed'
import { getCurrentProfile } from "../../actions/profileActions";

class Homepage extends Component {
  componentWillMount() {
    this.props.getCurrentProfile();
    this.props.getAllposts();
  }

  render() {
    let content;
    const { posts } = this.props.posts;

    if (posts === null) {
      content = <Spinner />;
    } else {
      content = <PostsFeed posts={posts} />;
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="col-md-12">
            <h1>welcome: {this.props.auth.user.username}</h1>
            <h2> These are all the posts: </h2>
            <hr />
            {content}
          </div>
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.object.isRequired,
  getAllposts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts,
  auth: state.auth
});

export default connect(mapStateToProps, { getAllposts, getCurrentProfile })(
  Homepage
);
