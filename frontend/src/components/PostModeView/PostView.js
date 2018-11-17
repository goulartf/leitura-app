import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import moment from "moment";

class PostView extends Component {

    render() {

        const {post, onHandleVote, onHandleDelete} = this.props;
        const classScore = post.voteScore !== 0 ? post.voteScore < 0 ? 'red' : 'green' : 'default';


        return (
            <div className="ui fluid card">
                <div className="content">
                    <div className={"ui right ribbon label " + classScore}>
                        {!post.hasVote && (
                            <span>
                                <a href="#" onClick={onHandleVote('downVote')}>
                                    <i className="thumbs down icon"></i>
                                </a>
                                <a href="#" onClick={onHandleVote('upVote')}>
                                    <i className="thumbs up icon"></i>
                                </a>
                            </span>
                        )}
                        {post.voteScore}
                    </div>
                    <div className="center aligned header">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="meta center aligned">
                        <span className="time">{moment(post.timestamp).calendar()}</span>
                        <br />
                        <br />
                    </div>
                    <div className="meta center aligned">
                        <Link to={`/${post.category}`} className="ui tag label tiny">
                            {post.category}
                        </Link>
                        <br />
                        <br />
                    </div>
                    <div className="description justified aligned">
                        <p>{post.body}</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="center aligned author">
                        <img className="ui avatar image large"
                             src={`/images/profile/${post.profile}`}/> {post.author}
                        <br/>
                    </div>
                </div>
                <div className="extra content">
                    <div className="left floated author">
                        <Link to={`/post/edit/${post.id}`} className='ui icon button primary basic'>
                            <i className="icon edit" />
                        </Link>
                        <a href="#" className='ui icon button negative basic' onClick={onHandleDelete}>
                            <i className="icon trash" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostView;
