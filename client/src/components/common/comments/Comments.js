import React from 'react';

const Comments = ({
    comments
}) => (
        <div>
            <div className="comment mb-2 row">
                {
                    comments.map(elem => (
                        <div className="comment-content col-md-11 col-sm-10">
                            <div className="comment-body">
                                <p>
                                    <h2>{elem.comment}</h2>
                                    <br />
                                    <a href="/" className="text-right small"><i className="ion-reply"></i> Reply</a>
                                    <a href="/" className="text-right small"><i className="ion-reply"></i> like</a>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

export default Comments;