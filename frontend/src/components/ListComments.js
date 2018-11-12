import React, {Component} from 'react';
import Comment from './Comment';
import * as API from '../utils/api';
import NewComment from "./NewComment";

export default class ListComments extends Component {

    state = {
        comments: []
    };

    componentDidMount() {

        API.getComments(this.props.post.id).then((comments) => {
            console.log(comments);
            this.setState(() => ({comments}));
        });

    }

    handleSubmit = (newComment) => {

        this.setState((state) => {
                return {
                    comments: state.comments.concat(newComment)
                }
            }
        );
        API.saveAddComment(newComment);

    }

    handleVote = (_comment, vote) => e => {

        this.setState((state) => {
                return {
                    comments: state.comments.map(comment => {
                        if (comment.id === _comment.id) {
                            comment.voteScore = vote === 'upVote' ? comment.voteScore + 1 : comment.voteScore - 1;
                            comment.hasVote = vote === 'upVote' ? "up" : "down";
                        }
                        return comment;
                    })
                }
            }
        );

        API.saveVoteComment({id: _comment.id, vote});

    }

    render() {

        const {post} = this.props;

        return (
            <React.Fragment>
                <div className="ui fluid card">
                    <div className="content">
                        <div className="header">Comments ({post.commentCount})</div>
                    </div>
                    <div className="content">
                        <div className="ui comments">
                            {this.state.comments.map((comment) => (
                                <Comment comment={comment} key={comment.id} onHandleVote={this.handleVote}/>
                            ))}
                        </div>
                    </div>
                </div>
                <NewComment post={post} onHandleSubmit={this.handleSubmit}/>
            </React.Fragment>
        );
    }
}
