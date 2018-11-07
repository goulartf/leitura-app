import * as API from '../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const VOTE_POST = 'VOTE_POST';

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

export function handleVotePost(info) {
    return (dispatch) => {
        dispatch(votePost(info));
        return API.saveVotePost(info)
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e)
                dispatch(votePost(info))
                alert('The was an error liking the tweet. Try again.')
            })
    }
}