import React, {Component} from 'react';
import moment from 'moment'

class Comment extends Component {

    render() {

        const {comment, onHandleVote} = this.props;
        console.log()

        return (
            <React.Fragment>
                <div className="comment">
                    <a className="avatar">
                        <img src="https://react.semantic-ui.com//images/avatar/small/matt.jpg"/>
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
                                <i className={"thumbs "+ comment.hasVote +" icon"}></i>
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
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Comment
