import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleVotePost} from "../actions/posts";
import {Link, withRouter} from 'react-router-dom';
import moment from "moment";

class Post extends Component {

    handleVote = vote => e => {

        e.preventDefault();
        const {dispatch, post} = this.props

        dispatch(handleVotePost({
            id: post.id,
            vote: vote,
            hasVote: post.hasVote ? true : false
        }))

    }

    render() {

        const {post} = this.props;
        const classScore = post.voteScore !== 0 ? post.voteScore < 0 ? 'red' : 'green' : 'default';

        return (
            <div className="ui centered card fluid">
                <div className="content">
                    <div className={"ui right ribbon label " + classScore}>
                        {!post.hasVote && (
                            <span>
                                <a href="#" onClick={this.handleVote('downVote')}><i className="thumbs down icon"></i></a>
                                <a href="#" onClick={this.handleVote('upVote')}><i className="thumbs up icon"></i></a>
                            </span>
                        )}
                        {post.voteScore}
                    </div>
                    <div className="header">
                        <Link to={`/${post.category}/${post.id}`} className='tweet'>
                        <img className="ui avatar image"
                             src={`/images/profile/${post.profile}`}/> {post.author}
                        <br/>
                        {post.title}
                        </Link>
                    </div>
                    <div className="meta">
                        <span className="right floated time">{moment(post.timestamp).calendar()}</span>
                        <span className="category">{post.category}</span>
                    </div>
                    <div className="description">
                        <p>{post.body}</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="left floated author">
                        <Link to={`/post/edit/${post.id}`} className='ui icon button primary basic'>
                            <i className="icon edit" />
                        </Link>
                        <button className='ui icon button negative basic'>
                            <i className="icon trash" />
                        </button>
                    </div>
                    <div className="right floated author">
                        <i className="comment icon"></i>{post.commentCount}
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps({posts}, {id}) {

    return {
        post: posts[id]
    }
}

export default connect(mapStateToProps)(Post)
