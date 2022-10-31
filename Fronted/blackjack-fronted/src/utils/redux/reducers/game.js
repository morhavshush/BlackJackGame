import { createSlice } from "@reduxjs/toolkit";


export const gameSlice = createSlice({
  name: "game",
  initialState: {
    data: {
      winner: "",
    },
  },
  reducers: {
    setNewWinner: (state, action) => {
      state.data.winner = action.payload;
    },
  },
});

const { setNewWinner } = gameSlice.actions;

export const selectWinner = (state) => state.game.gameReducer.data.winner;

export default gameSlice.reducer;

export const setWinnerAsync = (state) => (dispatch) => {
  setTimeout(() => {
    dispatch(setNewWinner(state));
  }, 1000);
};
