import { BROWSE_BREED, BROWSE_BREED_FAILURE, BROWSE_BREED_SUCCESS } from './constants';
import axios from 'axios';

const browseBreed = () => {
    return {
        type: BROWSE_BREED
    }
} 

const browseBreedSuccess = (data) => {
    return {
        type: BROWSE_BREED_SUCCESS,
        payload: data
    }
} 

const browseBreedFailure = (error) => {
    return {
        type: BROWSE_BREED_FAILURE,
        payload: error
    }
} 

export const fetchBrowseBreed = (breedName) => {
    return (dispatch) => {
        dispatch(browseBreed())

        axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then(res => dispatch(browseBreedSuccess(res.data)))
            .catch(error => dispatch(browseBreedFailure(error)))
    }
}