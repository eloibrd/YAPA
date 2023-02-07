import { UPDATE_POKEMONS, UPDATE_SELECTED_POKEMON } from "../actions";

/**
 * Initial state
 */
const initialState = {
  /**
   * List of pokemons to display
   */
  pokemons: [],

  /**
   * Pokemon to show detail id
   */
  selectedPokemonId: undefined,
};

/**
 * Reducer
 */
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POKEMONS:
      return {
        ...state,
        pokemons: action.robots,
      };
    case UPDATE_SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemonId: action.robotId,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
