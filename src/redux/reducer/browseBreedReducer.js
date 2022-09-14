import { BROWSE_BREED, BROWSE_BREED_FAILURE, BROWSE_BREED_SUCCESS } from '../action/constants';

const initialState = {
    isLoading: false,
    browseBreedData: {},
    error: null
}

export const browseBreedReducer = (state = initialState, action) => {
    switch (action.type) {
        case BROWSE_BREED: {
            return { ...state, isLoading: true }
        }
        case BROWSE_BREED_SUCCESS: {
            return { ...state, browseBreedData: action.payload, isLoading: false }
        }
        case BROWSE_BREED_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}
