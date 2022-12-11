import { Person } from "@/models";
import { LocalStorageTypes } from "@/models/localstorage";
import { getLocalStorages, setLocalStorages } from "@/utils";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorages(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorages(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorages(LocalStorageTypes.FAVORITES, action.payload);
      return action.payload;
    },

    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      );
      setLocalStorages(LocalStorageTypes.FAVORITES, filteredState);
      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;