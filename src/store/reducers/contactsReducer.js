import { FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILURE, SHOW_MODAL, HIDE_MODAL, GET_ID } from "../actionsTypes";

const initialState = {
    loading: false,
    error: null,
    contacts: [],
    modalInfo: [],
    modal: false,
    id: ''
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_SUCCESS:
            return { ...state, loading: false, contacts: action.contacts };
        case FETCH_CONTACTS_FAILURE:
            return { ...state, loading: false, error: action.error };
        case SHOW_MODAL:
            return { ...state, modal: true, modalInfo: action.modalInfo };
        case HIDE_MODAL:
            return { ...state, modal: false };
        case GET_ID:
            return { ...state, id: action.id };
        default:
            return state;
    };
};


export default contactsReducer;