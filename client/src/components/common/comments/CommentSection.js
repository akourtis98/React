import React from 'react';
import Comments from './Comments';

const CommentSection = ({
    comments
}) => (
        <div>
            <div className="container">
                <div className="row">
                    <h4 className="mb-2">Write a comment:</h4>
                    <textarea rows="5" className="form-control form-control-lg comment-body" />
                    <div className="comments col-md-9" id="comments">
                        <div className="row pt-2">
                            <div className="col-12">
                                <a href="/" className="btn btn-sm btn-primary">Comment</a>
                            </div>
                        </div>
                    </div>
                    {comments != null ? <Comments comments={comments} /> : ""}
                </div>
            </div>
        </div>
    )

export default CommentSection;