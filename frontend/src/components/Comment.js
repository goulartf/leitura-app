import React, {Component} from 'react';
import moment from 'moment'
import FormComment from "./FormComment";

class Comment extends Component {

    state = {
        edit: false
    }

    handleEdit = (e) =>  {
        this.setState((oldState) => ({edit: oldState.edit ? false : true}));
    }

    render() {

        const {comment, onHandleVote, onHandleSubmit, post} = this.props;
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
                                        <a className="" onClick={onHandleVote(comment, 'downVote')}>
                                            <i className="thumbs down icon"></i>
                                        </a>
                                        <a className="" onClick={onHandleVote(comment, 'upVote')}>
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
                                <a className="">
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

export default Comment
