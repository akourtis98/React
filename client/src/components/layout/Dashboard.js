import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllposts } from '../../actions/postsActions';
import PostsTable from '../common/PostsTable';

class Dashboard extends Component {
    componentWillMount() {
        this.props.getAllposts();
    }

    render() {
        let { posts } = this.props.posts;

        if (posts != null) {
            posts = (
                <PostsTable
                    posts={posts}
                />
            )
        } else {
            posts = (
                <div>
                    no posts amigo
                </div>
            )
        }

        return (
            <div className="dashboard">
                <div className="container">
                    <div className="col-md-12">
                        <a href="/">
                            <button className="btn btn-light">
                                Click here to go back
                            </button>
                        </a>
                        {posts}
                    </div>
                </div >
            </div >
        );
    }
}

Dashboard.propTypes = {
    posts: PropTypes.object,
    getAllposts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    posts: state.posts,
});
export default connect(mapStateToProps, { getAllposts })(
    Dashboard
);

