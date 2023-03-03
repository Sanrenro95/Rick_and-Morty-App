import { ADD_FEATURES, DELETE_FEATURES, FILTER, ORDER } from "../types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FEATURES:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case DELETE_FEATURES:
      return {
        ...state,
        myFavorites: payload
      };

    case FILTER:
      const filtered = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === 'All' ? state.allCharacters : filtered,
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id < b.id)
            : state.allCharacters.sort((a, b) => a.id < b.id),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
