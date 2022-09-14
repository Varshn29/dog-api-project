import { RANDOM_IMAGE, RANDOM_IMAGE_FAILURE, RANDOM_IMAGE_SUCCESS } from './constants';
import axios from 'axios';

const getRandomImage = () => {
    return {
        type: RANDOM_IMAGE
    }
} 

const getRandomImageSuccess = (data) => {
    return {
        type: RANDOM_IMAGE_SUCCESS,
        payload: data
    }
} 

const getRandomImageFailure = (error) => {
    return {
        type: RANDOM_IMAGE_FAILURE,
        payload: error
    }
} 

export const randomImageFetched = () => {
    return (dispatch) => {
        dispatch(getRandomImage())

        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => dispatch(getRandomImageSuccess(res.data)))
            .catch(error => dispatch(getRandomImageFailure(error)))
    }
}