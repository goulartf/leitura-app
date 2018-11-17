import React, {Component} from 'react';
import {handleAddPost, handleCountCommentPost, handleEditPost} from "../actions/posts";
import {handleAddComment, handleEditComment} from "../actions/comments";
import connect from "react-redux/es/connect/connect";
import DropDownProfile from "./generics/DropDownProfile";

class FormComment extends Component {

    state = {
        body: '',
        author: '',
        profile: ''
    };

    componentDidMount() {
        const {comment} = this.props;

        if (comment) {
            this.setState(() => ({
                body: comment.body,
                author: comment.author,
                profile: comment.profile,
            }))
        }

    }

    handleChangeProfile = (e, {value}) => {
        const profile = value;
        this.setState(() => ({
            profile
        }))
    }

    handleChangeBody = (e) => {
        const body = e.target.value
        this.setState(() => ({
            body
        }))
    }

    handleChangeAuthor = (e) => {
        const author = e.target.value
        this.setState(() => ({
            author
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {body, author, profile} = this.state
        const {post, dispatch, onHandleEdit, comment} = this.props

        let objComment;
        if (!comment) {
            objComment = {
                body,
                author,
                profile,
                parentId: post.id,
                timestamp: new Date().getTime(),
                voteScore: 0,
                exists: false
            };
            dispatch(handleAddComment(objComment))
            dispatch(handleCountCommentPost({post, value: 1}));
        } else {
            objComment = {
                ...comment,
                body,
                author,
                profile,
                exists: true
            }
            dispatch(handleEditComment(objComment))
        }

        this.setState(() => ({
            body: '',
            author: '',
            profile: ''
        }));


        if (onHandleEdit) {
            onHandleEdit();
        }

    }

    render() {

        const {body, author, profile} = this.state;
        const {comments} = this.props;

        const disableSubmit = body === '' || author === '' || profile === '' ? 'disabled' : '';

        return (
            <React.Fragment>
                <div className="ui fluid card">
                    <div className="content">
                        <div className="header">Reply</div>
                    </div>
                    <div className="content">
                        <div className="description">
                            <div className="ui form">
                                <div className="required field">
                                    <label>Profile</label>
                                    <DropDownProfile clearable
                                                     placeholder="Select Profile"
                                                     value={profile}
                                                     onHandleChangeProfile={this.handleChangeProfile}/>
                                </div>
                                <div className="required field">
                                    <label>Author</label>
                                    <input type="text"
                                           name="author"
                                           placeholder="Author Name"
                                           value={author}
                                           onChange={this.handleChangeAuthor}/>
                                </div>
                                <div className="required field">
                                            <textarea
                                                placeholder="Reply"
                                                value={body}
                                                onChange={this.handleChangeBody}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className={"ui bottom attached button green " + disableSubmit} onClick={this.handleSubmit}>
                        <i className="add icon"></i>
                        Reply
                    </button>

                </div>

            </React.Fragment>
        );
    }
}

export default connect()(FormComment);
