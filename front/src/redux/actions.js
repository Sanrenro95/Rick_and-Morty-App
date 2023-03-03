import { ADD_FEATURES, DELETE_FEATURES, FILTER, ORDER } from "./types";
import axios from 'axios'

export function addFeatures(character) {
    return function (dispatch) {
        axios.post("http://localhost:3001/favs/create", character).then((response) => {
            return dispatch ({
                type: ADD_FEATURES,
                payload: response.data
            })
        })
    }
    
}

export function removeFavorite(id) {
    return function (dispatch) {
        axios.delete("http://localhost:3001/favs/delete/" + id).then((response) => {
            return dispatch ({
                type: DELETE_FEATURES,
                payload: response.data
            })
        })
    }
   
}

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(id) {
    return {
        type: ORDER,
        payload: id
    }
}