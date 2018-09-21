import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllposts } from '../../actions/postsActions';
import Article from '../common/Article';
import Spinner from "../common/Spinner";

class Homepage extends Component {
  componentWillMount() {
    this.props.getAllposts();
  }

  render() {
    const posts = (
      this.props.posts.posts.map(post => (
        <div key={post._id}>
          <Article
            title={post.title}
            id={post._id}
          />
        </div>
      )
      ))

    return (
      <div className="dashboard">
        <div className="container">
          <div className="col-md-12">
            <h2> These are all the posts: </h2>
            <hr />
            {this.props.loading ? <div> <Spinner /> </div> : <div> {posts} </div>}
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
