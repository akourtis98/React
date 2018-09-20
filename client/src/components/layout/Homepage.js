import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllposts } from '../../actions/postsActions';
import Article from '../common/Article';

class Homepage extends Component {
  componentWillMount() {
    this.props.getAllposts();
  }

  render() {
    const posts = (
      this.props.posts.posts.map(article => (
        <div key={article.id}>
          <Article
            title={article.title}
            id={article._id}
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
            {posts}
          </div>
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  posts: PropTypes.object.isRequired,
  getAllposts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { getAllposts })(
  Homepage
);
