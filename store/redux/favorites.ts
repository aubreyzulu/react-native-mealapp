import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [] as Array<string>,
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      // find the items index
      const index = state.favorites.indexOf(action.payload);

      // only splice array when item is found
      if (index > -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
