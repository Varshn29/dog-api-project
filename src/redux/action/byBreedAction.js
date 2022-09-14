import { BY_BREED, BY_BREED_FAILURE, BY_BREED_SUCCESS } from './constants';
import axios from 'axios';

const getByBreed = () => {
    return {
        type: BY_BREED
    }
} 

const getByBreedSuccess = (data) => {
    return {
        type: BY_BREED_SUCCESS,
        payload: data
    }
} 

const getByBreedFailure = (error) => {
    return {
        type: BY_BREED_FAILURE,
        payload: error
    }
} 

export const byBreedFetched = () => {
    return (dispatch) => {
        dispatch(getByBreed())

        axios.get('https://dog.ceo/api/breed/hound/images')
            .then(res => dispatch(getByBreedSuccess(res.data)))
            .catch(error => dispatch(getByBreedFailure(error)))
    }
}