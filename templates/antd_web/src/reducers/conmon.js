import * as types from '../constants/conmon';

export function R_userLogin(state = 'loading', action) {
    switch (action.type) {
        case types.USER_LOGIN + "_SUCCESS":
            return action.payload.data
        case types.USER_LOGIN + "_PENDING":
            return state
        default:
            return state;
    }
}
export function R_regions(state = 'loading', action) {
    switch (action.type) {
        case types.REGIONS + "_SUCCESS":
            return action.payload.data
        case types.REGIONS + "_PENDING":
            return state
        default:
            return state;
    }
}
export function R_medias(state = [], action) {
    switch (action.type) {
        case types.MEDIAS + "_SUCCESS":
            return action.payload.data
        case types.MEDIAS + "_PENDING":
            return state
        default:
            return state;
    }
}

