import React, {Component} from 'react';
import {connect} from 'react-redux'
import Comment from './Comment';
import AddComment from "./AddComment";
import {handleReceiveComments} from "../actions/comments";
import CommentPlaceholder from "./CommentPlaceholder";

class ListComments extends Component {

    componentDidMount() {
        const {post} = this.props;
        if (post) {
            const {dispatch} = this.props;
            dispatch(handleReceiveComments(post))
        }
    }

    render() {

        const {post, commentsIds, loader} = this.props;
        return (
            <React.Fragment>
                <div className="ui fluid card">
                    <div className="content">
                        <div className="header">Comments ({post.commentCount})</div>
                    </div>
                    <div className="content">
                        <div className="ui comments">

                            {loader && loader.show && (
                                <CommentPlaceholder/>
                            )}

                            {commentsIds && commentsIds.map((commentId) => (
                                <Comment post={post}
                                         key={commentId}
                                         id={commentId}/>
                            ))}

                            {loader && !loader.show && commentsIds.length <= 0 && (
                                <div className="ui info message">
                                    <div className="align center header">
                                        Ops! no comments posted here :/<br/>
                                        Be the first!
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <AddComment post={post}/>
            </React.Fragment>
        );
    }
}

function mapStateToProps({comments, loader}, {post}) {

    return {
        loader,
        commentsIds: Object.keys(comments).filter((commentId) => {
            return comments[commentId].parentId === post.id;
        }).sort((a, b) => {
            return comments[b].voteScore - comments[a].voteScore
        })
    }

}

export default connect(mapStateToProps)(ListComments);