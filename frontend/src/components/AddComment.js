import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleCountCommentPost} from "../actions/posts";
import FormComment from "./FormComment";

class AddComment extends Component {

    render() {

        const {post,onHandleSubmit} = this.props

        return (
            <div className="ui one column grid">
                <div className="column">

                    <FormComment onHandleSubmit={onHandleSubmit} post={post} />

                </div>
            </div>
        );
    }
}

export default connect()(AddComment);
