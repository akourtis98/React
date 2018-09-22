import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deletePost } from '../../actions/postsActions';
import { connect } from 'react-redux';

class PostsTable extends Component {
    render() {
        return (
            <div className="table-responsive">
                <table id="mytable" className="table table-bordred table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.posts.map(post => (
                            <tr key={post._id}>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <a href={'/edit/' + post._id}
                                    >
                                        <button className="btn btn-info btn-xs">
                                            <span className="fa fa-pencil fa-lg"></span>
                                        </button>
                                    </a>
                                </td>
                                <td><button onClick={e => { this.props.deletePost(post._id) }} className="btn btn-danger btn-xs">
                                    <span className="fa fa-trash-o fa-lg"></span>
                                </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

PostsTable.propTypes = {
    deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { deletePost })(PostsTable);

