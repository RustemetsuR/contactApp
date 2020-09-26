import axios from '../../axiosContacts';
import { CHANGE_CONTACT_DATA, CLEAR_CONTACT_DATA, CONTACT_FAILURE, CONTACT_SUCCESS } from '../actionsTypes';

export const contactSuccess = () =>{
    return {type: CONTACT_SUCCESS};
};
export const contactFailure = error =>{
    return {type: CONTACT_FAILURE, error};
};
export const changeContactData = (name,value) =>{
    return {type: CHANGE_CONTACT_DATA, name, value};
};
export const clearContactData = () =>{
    return {type: CLEAR_CONTACT_DATA};
};

export const createContact = (contact) => {
    return async dispatch =>{
        try{
            const response = await axios.post('/contacts.json', contact);
            dispatch(contactSuccess(response.data));
        } catch(e){
            dispatch(contactFailure(e));
        };
    };
};