import { GET_USER_DETAILS, GET_USER_DETAILS_FAILURE, GET_USER_DETAILS_SUCCESS } from './constants';
import axios from 'axios';

const getUserDetails = () => {
    return {
        type: GET_USER_DETAILS
    }
} 

const getUserDetailsSuccess = (data) => {
    return {
        type: GET_USER_DETAILS_SUCCESS,
        payload: data
    }
} 

const getUserDetailsFailure = (error) => {
    return {
        type: GET_USER_DETAILS_FAILURE,
        payload: error
    }
} 

export const fetchUserDetails = () => {
    return (dispatch) => {
        dispatch(getUserDetails())

        axios.get('https://randomuser.me/api')
            .then(res => dispatch(getUserDetailsSuccess(res.data)))
            .catch(error => dispatch(getUserDetailsFailure(error)))
    }
}