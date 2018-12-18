import * as types from '../constants/conmon';
import api from '../util/api'
export function A_userLogin(username, password) {
    return {
        type: types.USER_LOGIN,
        payload: {
            promise: api.post('/login', {
                data: {
                    username: username,
                    password: password
                },
            })
        },
    };
}
