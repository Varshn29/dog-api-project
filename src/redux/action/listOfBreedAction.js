import { LIST_OF_BREED, LIST_OF_BREED_FAILURE, LIST_OF_BREED_SUCCESS } from './constants';
import axios from 'axios';

const listOfBreed = () => {
    return {
        type: LIST_OF_BREED
    }
} 

const listOfBreedSuccess = (data) => {
    return {
        type: LIST_OF_BREED_SUCCESS,
        payload: data
    }
} 

const listOfBreedFailure = (error) => {
    return {
        type: LIST_OF_BREED_FAILURE,
        payload: error
    }
} 

export const listOfBreedFetched = () => {
    return (dispatch) => {
        dispatch(listOfBreed())

        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(res => dispatch(listOfBreedSuccess(res.data)))
            .catch(error => dispatch(listOfBreedFailure(error)))
    }
}