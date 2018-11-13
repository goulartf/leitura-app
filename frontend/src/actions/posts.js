import * as API from '../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const VOTE_POST = 'VOTE_POST';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const COUNT_COMMENT_POST = 'COUNT_COMMENT_POST';
export const ORDER_POST = 'ORDER_POST';

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

export function handleVotePost(info) {
    return (dispatch) => {
        dispatch(votePost(info));
        return API.saveVotePost(info)
            .catch((e) => {
                console.warn('Error in HandleVote: ', e)
                dispatch(votePost(info))
                alert('The was an error voting the post. Try again.')
            })
    }
}

export function handleAddPost(post) {
    return (dispatch) => {
        dispatch(addPost(post));
        return API.saveAddPost(post)
            .catch((e) => {
                console.warn('Error in handleAddPost: ', e)
                // dispatch(votePost(info))
                alert('The was an error to save the post. Try again.')
            })
    }
}

export function handleEditPost(post) {
    return (dispatch) => {
        dispatch(editPost(post));
        return API.saveEditPost(post)
            .catch((e) => {
                console.warn('Error in handleEditPost: ', e)
                alert('The was an error to save the post. Try again.')
            })
    }
}

export function handleCountCommentPost({post, value}) {
    return (dispatch) => {
        return dispatch(countCommentPost(post, value));
    }
}

export function handleOrderBy(field,sort) {

    return {
        type: ORDER_POST,
        field,
        sort

    }

}

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}