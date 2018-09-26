import React from 'react';

const Comment = () => (
    <div>
        <div className="comment mb-2 row">
            <div className="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                <a href=""><img className="mx-auto rounded-circle img-fluid" src="http://demos.themes.guide/bodeo/assets/images/users/m103.jpg" alt="avatar" /></a>
            </div>
            <div className="comment-content col-md-11 col-sm-10">
                <h6 className="small comment-meta"><a href="#">admin</a> Today, 2:38</h6>
                <div className="comment-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href>http://wwwwww.com</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            <br />
                        <a href="" className="text-right small"><i className="ion-reply"></i> Reply</a>
                        <a href="" className="text-right small"><i className="ion-reply"></i> like</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="container-small">
            <div className="comment mb-2 row">
                <div className="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                    <a href=""><img className="mx-auto rounded-circle img-fluid" src="http://demos.themes.guide/bodeo/assets/images/users/m103.jpg" alt="avatar" /></a>
                </div>
                <div className="comment-content col-md-11 col-sm-10">
                    <h6 className="small comment-meta"><a href="#">admin</a> Today, 2:38</h6>
                    <div className="comment-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href>http://wwwwww.com</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            <br />
                            <a href="" className="text-right small"><i className="ion-reply"></i> Reply</a>
                            <a href="" className="text-right small"><i className="ion-reply"></i> like</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Comment;