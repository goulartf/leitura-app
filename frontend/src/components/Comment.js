import React, {Component} from 'react';
import moment from 'moment'
import FormComment from "./FormComment";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {handleCountCommentPost} from "../actions/posts";
import {handleVoteComment, handleDeleteComment} from "../actions/comments";

class Comment extends Component {

    state = {
        edit: false
    }

    handleEdit = (e) =>  {
        this.setState((oldState) => ({edit: oldState.edit ? false : true}));
    }

    handleVote = vote => e => {

        e.preventDefault();
        const {dispatch, comment} = this.props

        dispatch(handleVoteComment({
            id: comment.id,
            vote: vote,
            hasVote: comment.hasVote ? true : false
        }))

    }

    handleDelete = (e) => {
        const {dispatch, comment, post} = this.props

        dispatch(handleDeleteComment(comment))
        dispatch(handleCountCommentPost({post, value: -1}));

    }

    render() {

        const {comment, onHandleSubmit, post} = this.props;
        const {edit} = this.state;

        return (
            <React.Fragment>
                {!edit && (
                    <div className="comment">
                        <a className="avatar">
                            <img src={`/images/profile/${comment.profile}`}/>
                        </a>
                        <div className="content">
                            <a className="author">{comment.author}</a>
                            <div className="metadata">
                                <span className="date">{moment(comment.timestamp).calendar()}</span>
                                <div className="rating">
                                    <i className="user icon"></i>
                                    {comment.voteScore} Votes
                                </div>

                                {typeof comment.hasVote != "undefined" && (
                                    <i className={"thumbs " + comment.hasVote + " icon"}></i>
                                )}

                                {typeof comment.hasVote == "undefined" && (
                                    <div>
                                        <a className="" onClick={this.handleVote('downVote')}>
                                            <i className="thumbs down icon"></i>
                                        </a>
                                        <a className="" onClick={this.handleVote('upVote')}>
                                            <i className="thumbs up icon"></i>
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="text">
                                {comment.body}
                            </div>
                            <div className="actions">
                                <a className="" onClick={this.handleEdit}>
                                    <i className="edit icon"></i>
                                </a>
                                <a className="" onClick={this.handleDelete}>
                                    <i className="trash icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {edit && (
                    <div className="comment">
                        <FormComment comment={comment} onHandleSubmit={onHandleSubmit} post={post} onHandleEdit={this.handleEdit} />
                    </div>
                )}
            </React.Fragment>
        );
    }
}

function mapStateToProps({comments}, {id}) {
    return {
        comment: comments[id]
    }
}

export default withRouter(connect(mapStateToProps)(Comment))
