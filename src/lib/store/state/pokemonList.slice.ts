import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define the initial state using that type
const initialState: PokemonListState = {
  pokemonList: [],
  status: "idle",
};

export const pokemonListSlice = createSlice({
  name: "pokemonList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updatePokemonList: (state, action: PayloadAction<Array<Pokemon>>) => {
      state.pokemonList = action.payload;
    },
  },
});

// Export state actions
export const { updatePokemonList } = pokemonListSlice.actions;

/**
 * Pokemon List selector
 * @param state
 * @returns The current llst of pokemons stored in the state
 */
export const selectPokemonList = (state: RootState) =>
  state.pokemonList.pokemonList;

export default pokemonListSlice.reducer;
