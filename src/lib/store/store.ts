import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "./state/pokemonList.slice";

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
