import { ADD_FEATURES, DELETE_FEATURES } from "../types";

const initialState = {
  myFavorites: []
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FEATURES:
            return {
                ...state,
                myFavorites:[...state.myFavorites, payload]
            }
        
        case DELETE_FEATURES:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((feat) => feat.id !== payload),
            };
        
        default:
            return{...state}
    }
}

export default rootReducer;