import * as API from '../utils/api'
import {receivePosts} from '../actions/posts'
import {receiveCategories} from '../actions/categories'

export const LOADER_SHOW = "LOADER_SHOW";
export const LOADER_HIDE = "LOADER_HIDE";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(loaderShow())
        return API.getInitialData()
            .then(({categories, posts}) => {
                setTimeout(() => {
                    dispatch(loaderHide())
                    dispatch(receiveCategories(categories))
                    dispatch(receivePosts(posts))
                }, 3000)
            })
    }
}

export function loaderShow() {

    return {
        type: LOADER_SHOW
    }

}

export function loaderHide() {

    return {
        type: LOADER_HIDE
    }

}