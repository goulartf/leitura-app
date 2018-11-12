import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleCountCommentPost} from "../actions/posts";

class NewComment extends Component {

    state = {
        body: '',
        author: ''
    };

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

        const {body, author} = this.state
        const {post, dispatch} = this.props

        const newComment = {
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            body,
            author,
            parentId: post.id,
            timestamp: new Date().getTime(),
            voteScore: 0
        };

        this.setState(() => ({
            body: '',
            author: ''
        }))

        dispatch(handleCountCommentPost({post,value:1}));
        this.props.onHandleSubmit(newComment);



    }

    render() {

        const {body, author} = this.state;

        const disableSubmit = body === '' || author === '' ? 'disabled' : '';

        return (
            <div className="ui one column grid">
                <div className="column">

                    <form className='new-tweet' onSubmit={this.handleSubmit} >
                        <div className="ui fluid card">
                            <div className="content">
                                <div className="header">Reply</div>
                            </div>
                            <div className="content">
                                <div className="description">
                                    <div className="ui form">
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
                            <button className={"ui bottom attached button green " + disableSubmit}>
                                <i className="add icon"></i>
                                New Reply
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(NewComment);
