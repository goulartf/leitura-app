import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import moment from "moment";

class PostList extends Component {

    render() {

        const {post, onHandleVote, onHandleDelete} = this.props;
        const classScore = post.voteScore !== 0 ? post.voteScore < 0 ? 'red' : 'green' : 'default';


        return (
            <div className="ui card">
                <div className="content">
                    <div className={"ui right ribbon label " + classScore}>
                        {!post.hasVote && (
                            <span>
                                <a href="#" onClick={onHandleVote('downVote')}><i className="thumbs down icon"></i></a>
                                <a href="#" onClick={onHandleVote('upVote')}><i className="thumbs up icon"></i></a>
                            </span>
                        )}
                        {post.voteScore}
                    </div>
                    <div className="header">
                        <Link to={`/${post.category}/${post.id}`}>
                        <img className="ui avatar image"
                             src={`/images/profile/${post.profile}`}/> {post.author}
                        <br/>
                        {post.title}
                        </Link>
                    </div>
                    <div className="meta">
                        <span className="time">{moment(post.timestamp).calendar()}</span>
                        <span className="category right floated">
                            <Link to={`/${post.category}`} className="ui tag label tiny">
                                {post.category}
                            </Link>
                        </span>

                    </div>
                    <div className="description">
                        <p>
                            {post.body.substr(1, 255)}
                            <Link to={`/${post.category}/${post.id}`}> keep reading...</Link>
                        </p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="left floated author">
                        <Link to={`/post/edit/${post.id}`} className='ui icon button primary basic'>
                            <i className="icon edit" />
                        </Link>
                        <a href="javascrpt:;" className='ui icon button negative basic' onClick={onHandleDelete}>
                            <i className="icon trash" />
                        </a>
                    </div>
                    <div className="right floated author">
                        <i className="comment icon"></i>{post.commentCount}
                    </div>
                </div>
            </div>
        );
    }
}

export default PostList;
