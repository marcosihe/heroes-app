import { types } from '../types/types';
// const state = {
//     name: 'Marcos',
//     logged: true
// }

/* Así se verá el action

const loginAction = {
    type: types.login,
    payload: {
        name: 'Marcos',
        email: 'example@gmail.com'
    }
}
*/

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        
            default:
                return state;
    }
}