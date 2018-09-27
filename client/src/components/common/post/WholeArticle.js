import React, { Component } from 'react';
import CommentSection from '../comments/CommentSection';

class WholeArticle extends Component {
    onLikeClick(id) {
        this.props.addLike(id);
    }

    onUnlikeClick(id) {
        this.props.removeLike(id);
    }

    getLikes(id) {
        this.props.getLikes(id);
    }

    render() {
        return (
            <div>
                <div className="card mb-4" >
                    <a href="/">
                        <button className="btn btn-light">
                            Click here to go back
                    </button>
                    </a>
                    <img className="card-img-top" src="http://placehold.it/350x200" alt="Card cap" />
                    <div className="card-body">
                        <h2 className="card-title">{this.props.title} </h2>
                        <p>{this.props.body}</p>
                    </div>
                </div>
                <CommentSection comments={this.props.comments} />
            </div >
        )
    }
}

export default WholeArticle;

