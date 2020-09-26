import axios from '../../axiosContacts';
import { FETCH_CONTACTS_FAILURE, FETCH_CONTACTS_SUCCESS, SHOW_MODAL, HIDE_MODAL, GET_ID } from '../actionsTypes';

export const fetchContactSuccess = contacts => {
    return { type: FETCH_CONTACTS_SUCCESS, contacts };
};
export const fetchContactFailure = error => {
    return { type: FETCH_CONTACTS_FAILURE, error };
};
export const showModal = modalInfo => {
    return { type: SHOW_MODAL, modalInfo };
};
export const hideModal = () => {
    return { type: HIDE_MODAL };
};
export const getId = id => {
    return { type: GET_ID, id };
};

export const fetchData = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/contacts.json');
            dispatch(fetchContactSuccess(response.data));
        } catch (e) {
            dispatch(fetchContactFailure(e));
        };
    };
};