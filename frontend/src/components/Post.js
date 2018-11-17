import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {handleDeletePost, handleVotePost} from "../actions/posts";
import {withRouter} from 'react-router-dom';
import PostList from "./PostModeView/PostList";
import PostView from "./PostModeView/PostView";
import PostListPlaceholder from "./PostModeView/PostListPlaceholder";

class Post extends Component {

    componentDidMount(){

    }

    handleVote = vote => e => {

        e.preventDefault();
        const {dispatch, post} = this.props

        dispatch(handleVotePost({
            id: post.id,
            vote: vote,
            hasVote: post.hasVote ? true : false
        }))

    }

    handleDelete = () => {
        const {dispatch, post, history,id} = this.props

        dispatch(handleDeletePost(post))

        if(id){
            history.push('/')
        }

    }

    render() {

        const {post, modeView, loader} = this.props;

        return (
            <Fragment>

                {modeView === "list" && loader && loader.show &&  (
                    <PostListPlaceholder post={post} onHandleVote={this.handleVote} onHandleDelete={this.handleDelete}/>
                )}

                {modeView === "list" && (
                    <PostList post={post} onHandleVote={this.handleVote} onHandleDelete={this.handleDelete}/>
                )}

                {modeView === "view" && (
                    <PostView post={post} onHandleVote={this.handleVote} onHandleDelete={this.handleDelete}/>
                )}
            </Fragment>

        );
    }
}


function mapStateToProps({posts}, {id}) {

    return {
        post: posts[id]
    }

}

export default withRouter(connect(mapStateToProps)(Post))
