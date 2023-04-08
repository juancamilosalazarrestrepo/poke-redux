import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../slices/uiSlice";
import { getPokemonDetails, getPokemons } from "../api";

const initialState = {
  pokemons: [],
};

export const fetchPokemonWithDetails = createAsyncThunk(
  "data/fetchPokemonWithDetails",
  async (_, { dispatch }) => {
    //dispatch loader
    //fetch
    //dispatch del loader

    dispatch(setLoading(true))
    
    const pokemonsRes = await getPokemons();
    const pokemonsDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonsDetailed))
      dispatch(setLoading(false))
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorites: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorites } = dataSlice.actions;

export default dataSlice.reducer;
