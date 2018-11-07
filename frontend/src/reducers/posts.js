import {RECEIVE_POSTS,VOTE_POST} from '../actions/posts'

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS :
            return {
                ...state,
                ...action.posts
            }
        case VOTE_POST :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    voteScore: action.vote === "downVote" ? state[action.id].voteScore - 1 : state[action.id].voteScore + 1,
                    hasVote: true
                }
            }
        default :
            return state
    }
}