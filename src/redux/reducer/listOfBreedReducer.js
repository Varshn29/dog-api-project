import { LIST_OF_BREED, LIST_OF_BREED_FAILURE, LIST_OF_BREED_SUCCESS } from '../action/constants';

const initialState = {
    isLoading: false,
    listOfBreedData: {},
    error: null
}

export const listOfBreedReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_OF_BREED: {
            return { ...state, isLoading: true }
        }
        case LIST_OF_BREED_SUCCESS: {
            return { ...state, listOfBreedData: action.payload, isLoading: false }
        }
        case LIST_OF_BREED_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}
