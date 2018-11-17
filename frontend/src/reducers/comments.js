import {RECEIVE_COMMENTS, VOTE_COMMENT, ADD_COMMENT, ORDER_COMMENT, EDIT_COMMENT, DELETE_COMMENT} from '../actions/comments'
import {normalize, schema} from "normalizr";

export default function comments(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS :
            return {
                ...state,
                ...action.comments
            }
        case VOTE_COMMENT :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    voteScore: action.vote === "downVote" ? state[action.id].voteScore - 1 : state[action.id].voteScore + 1,
                    hasVote: true
                }
            }
        case ADD_COMMENT :
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        case EDIT_COMMENT :
            return {
                ...state,
                [action.comment.id]: {
                    ...state[action.comment.id],
                    ...action.comment
                }
            }
        case DELETE_COMMENT :
            delete state[action.comment.id]
            return {
                ...state
            }
        default :
            return state
    }
}