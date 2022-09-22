import { GET_USER_DETAILS, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE } from '../action/constants';

const initialState = {
    isLoading: false,
    userData: {},
    error: null
}

export const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DETAILS: {
            return { ...state, isLoading: true }
        }
        case GET_USER_DETAILS_SUCCESS: {
            return { ...state, userData: action.payload, isLoading: false }
        }
        case GET_USER_DETAILS_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}