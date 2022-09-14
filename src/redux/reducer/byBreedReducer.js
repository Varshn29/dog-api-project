import { BY_BREED, BY_BREED_FAILURE, BY_BREED_SUCCESS } from '../action/constants';

const initialState = {
    isLoading: false,
    byBreedData: [],
    error: null
}

export const byBreedReducer = (state = initialState, action) => {
    switch (action.type) {
        case BY_BREED: {
            return { ...state, isLoading: true }
        }
        case BY_BREED_SUCCESS: {
            return { ...state, byBreedData: action.payload, isLoading: false }
        }
        case BY_BREED_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}