import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleVotePost} from "../actions/posts";

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
            <div className="card">
                <div className="content">
                    <div className={"ui right ribbon label " + classScore}>
                        {!post.hasVote && (
                            <span>
                                <a onClick={this.handleVote('downVote')}><i className="thumbs down icon"></i></a>
                                <a onClick={this.handleVote('upVote')}><i className="thumbs up icon"></i></a>
                            </span>
                        )}
                        {post.voteScore}
                    </div>
                    <div className="header">
                        <img className="ui avatar image"
                             src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"/> {post.author}
                        <br/>
                        {post.title}
                    </div>
                    <div className="meta">
                        <span className="right floated time">2 days ago</span>
                        <span className="category">{post.category}</span>
                    </div>
                    <div className="description">
                        <p>{post.body}</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="right floated author">
                        <i className="comment icon"></i>{post.voteScore}
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

export default connect(mapStateToProps)(Post);
