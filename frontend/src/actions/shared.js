import * as API from '../utils/api'
import {receivePosts} from '../actions/posts'
import {receiveCategories} from '../actions/categories'

export function handleInitialData() {
    return (dispatch) => {
        return API.getInitialData()
            .then(({categories,posts}) => {
                dispatch(receiveCategories(categories))
                dispatch(receivePosts(posts))
            })
    }
}