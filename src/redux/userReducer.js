import { types } from "./types";

const initialState = {
    name: '',
    email: '',
    password: '',
    users: []
}

export default function userReducer(state = initialState, action) {

    if (action.type === types.INPUT_NAME) {
        return { ...state, name: action.payload }
    }
    else if (action.type === types.INPUT_EMAIL) {
        return { ...state, email: action.payload }
    }
    else if (action.type === types.INPUT_POROL) {
        return { ...state, password: action.payload }
    }
    else if (action.type === types.ADD_USER) {
        return { ...state, users: [...state.users, { name: state.name, email: state.email, password: state.password }], name: '', email: '', password: '' }
    }


    return state
}