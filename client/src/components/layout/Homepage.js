import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllposts } from '../../actions/postsActions';
import Spinner from "../common/spinner/Spinner";
import PostsFeed from '../common/post/PostsFeed'

class Homepage extends Component {
  componentWillMount() {
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
});

export default connect(mapStateToProps, { getAllposts })(
  Homepage
);
