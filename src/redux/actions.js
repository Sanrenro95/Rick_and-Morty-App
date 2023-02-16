import { ADD_FEATURES, DELETE_FEATURES } from "./types";

export function addFeatures(character) {
    return {
        type: ADD_FEATURES,
        payload: character
    }
}

export function deleteFeatures(id) {
    return {
        type: DELETE_FEATURES,
        payload: id
    }
}