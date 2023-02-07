import { combineReducers } from "redux";
import pokemonReducer from "./pokemon.reducer";

/**
 * Global reducer
 * Allow access to the [pokemonReducer]
 */
const globalReducer = combineReducers({
  pokemonState: pokemonReducer,
});

export default globalReducer;
