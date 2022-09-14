import { RANDOM_IMAGE, RANDOM_IMAGE_FAILURE, RANDOM_IMAGE_SUCCESS } from '../action/constants';

const initialState = {
    isLoading: false,
    randomData: {},
    error: null
}

export const ramdomImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case RANDOM_IMAGE: {
            return { ...state, isLoading: true }
        }
        case RANDOM_IMAGE_SUCCESS: {
            return { ...state, randomData: action.payload, isLoading: false }
        }
        case RANDOM_IMAGE_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}