import {LOADER_SHOW, LOADER_HIDE} from '../actions/shared'

export default function loader(state = {}, action) {
    switch (action.type) {
        case LOADER_SHOW :
            return {
                show: true
            }
        case LOADER_HIDE :
            return {
                show: false
            }
        default :
            return {
                state
            }
    }
}