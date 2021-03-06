import * as API from '../utils/api';
import {generateUID} from "../utils/helper";

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const VOTE_POST = 'VOTE_POST';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const COUNT_COMMENT_POST = 'COUNT_COMMENT_POST';
export const ORDER_POST = 'ORDER_POST';
export const DELETE_POST = 'DELETE_POST';

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

function votePost({id, vote, hasVote}) {
    return {
        type: VOTE_POST,
        id,
        vote,
        hasVote
    }
}

function countCommentPost(post, value) {
    return {
        type: COUNT_COMMENT_POST,
        post,
        value
    }
}

function addPost(post) {
    post.id = generateUID()
    post.timestamp = new Date().getTime()
    post.commentCount = 0;
    post.voteScore = 0;
    return {
        type: ADD_POST,
        post
    }
}

function editPost(post) {
    post.timestamp = new Date().getTime()
    return {
        type: EDIT_POST,
        post
    }
}

function deletePost(post) {
    return {
        type: DELETE_POST,
        post
    }
}

export function handleVotePost(info) {
    return (dispatch) => {
        dispatch(votePost(info));
        return API.saveVotePost(info);
    }
}

export function handleAddPost(post) {
    return (dispatch) => {
        dispatch(addPost(post));
        return API.saveAddPost(post);
    }
}

export function handleEditPost(post) {
    return (dispatch) => {
        dispatch(editPost(post));
        return API.saveEditPost(post);
    }
}

export function handleDeletePost(post) {
    return (dispatch) => {
        dispatch(deletePost(post));
        return API.saveDeletePost(post);
    }
}

export function handleCountCommentPost({post, value}) {
    return (dispatch) => {
        return dispatch(countCommentPost(post, value));
    }
}

export const orderPost = (field,sort) => ({
    type: ORDER_POST,
    field,
    sort

});

export function handleOrderBy(field,sort) {

    return orderPost(field,sort);

}
