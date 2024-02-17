import { types } from "./types";

export function changeInputNameAction(value) {
    return {
        type: types.INPUT_NAME,
        payload: value
    }
}

export function changeInputEmailAction(value) {
    return {
        type: types.INPUT_EMAIL,
        payload: value
    }
}

export function changeInputPasswordAction(value) {
    return {
        type: types.INPUT_POROL,
        payload: value
    }
}

export function addUserAction(name) {
    return {
        type: types.ADD_USER,
        payload: name
    }
}
