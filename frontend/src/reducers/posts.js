import {RECEIVE_POSTS, VOTE_POST, ADD_POST, COUNT_COMMENT_POST, ORDER_POST} from '../actions/posts'
import {normalize, schema} from "normalizr";

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
        case ADD_POST :
            return {
                ...state,
                [action.post.id]: action.post
            }
        case COUNT_COMMENT_POST :
            return {
                ...state,
                [action.post.id]: {
                    ...state[action.post.id],
                    commentCount: state[action.post.id].commentCount + action.value
                }
            }
        case ORDER_POST :

            const data = Object.keys(action.posts)
                .sort((a, b) => action.posts[b].voteScore - action.posts[a].voteScore)
                .map(postId => (action.posts[postId]));

            const postSchema = new schema.Array(new schema.Entity('posts'));
            const postsNormalized = normalize(data, postSchema);
            return postsNormalized.entities.posts;

            return {
                ...state,
                postsNormalized
            }
        default :
            return state
    }
}