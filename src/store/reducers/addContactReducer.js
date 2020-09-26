import { CONTACT_SUCCESS, CONTACT_FAILURE, CHANGE_CONTACT_DATA, CLEAR_CONTACT_DATA } from "../actionsTypes";

const initialState = {
    error: null,
    name: '',
    phone: '',
    email: '',
    image: '',
};

const addContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_SUCCESS:
            return { ...state, loading: false };
        case CONTACT_FAILURE:
            return { ...state, loading: false, error: action.error };
        case CHANGE_CONTACT_DATA:
            switch (action.name) {
                case 'name':
                    return { ...state, name: action.value };
                case 'phone':
                    return { ...state, phone: action.value };
                case 'email':
                    return { ...state, email: action.value };
                case 'image':
                    return { ...state, image: action.value };
                default:
                    return { ...state };
            };
        case CLEAR_CONTACT_DATA:
            return {...state, name: '', phone: '', email: '', image: ''};
        default:
            return state;
    };
};


export default addContactReducer;