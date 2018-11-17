import * as API from '../utils/api';
import {loaderHide, loaderShow} from "./shared";
import {generateUID} from "../utils/helper";

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const ORDER_COMMENT = 'ORDER_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

function voteComment({id, vote, hasVote}) {
    return {
        type: VOTE_COMMENT,
        id,
        vote,
        hasVote
    }
}

function addComment(comment) {
    comment.id = generateUID()
    comment.timestamp = new Date().getTime()

    return {
        type: ADD_COMMENT,
        comment
    }
}

function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    }
}

export function handleReceiveComments(post) {
    return (dispatch) => {
        dispatch(loaderShow());
        return API.getComments(post.id).then((comments) => {
            return setTimeout(() => {
                dispatch(receiveComments(comments));
                dispatch(loaderHide());
            },3000);
        });
    }
}

export function handleVoteComment(info) {
    return (dispatch) => {
        dispatch(voteComment(info));
        return API.saveVoteComment(info);
    }
}

export function handleAddComment(comment) {
    return (dispatch) => {
        dispatch(addComment(comment));
        return API.saveAddComment(comment);
    }
}

export function handleEditComment(comment) {
    return (dispatch) => {
        dispatch(editComment(comment));
        return API.saveEditComment(comment);
    }
}

export function handleDeleteComment(comment) {
    return (dispatch) => {
        dispatch(deleteComment(comment));
        return API.saveDeleteComment(comment);
    }
}