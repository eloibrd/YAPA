import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import ERessourceStatus from "../../utils/ressourceStatusEnum";

// Define the initial state using that type
const initialState: PokemonListState = {
  pokemonList: [],
  status: ERessourceStatus.idle,
};

/**
 * Pokemon List Slice using reduxjs toolkit
 */
export const pokemonListSlice = createSlice({
  name: "pokemonList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updatePokemonList: (state, action: PayloadAction<Array<PokemonEntry>>) => {
      state.pokemonList = action.payload;
    },
    updateStatus: (state, action: PayloadAction<RessourceStatus>) => {
      state.status = action.payload;
    },
  },
});

// Export state actions
export const { updatePokemonList, updateStatus } = pokemonListSlice.actions;

/**
 * Pokemon List selector
 * @param state
 * @returns `Array<PokemonEntry` The current llst of pokemons stored in the state
 */
export const selectPokemonList = (state: RootState) =>
  state.pokemonList.pokemonList;

/**
 * Pokemon List status selector
 * @param state `RootState`
 * @returns `RessourceStatus` The current status of the Pokemon List state
 */
export const selectPokemonListStatus = (state: RootState) =>
  state.pokemonList.status;

// Export reducer by default
export default pokemonListSlice.reducer;
