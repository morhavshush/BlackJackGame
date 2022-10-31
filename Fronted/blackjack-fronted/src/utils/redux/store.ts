import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { gameSlice } from "./reducers/game";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const gameReducer = gameSlice.reducer;

const combinedReducer = combineReducers({
  gameReducer,
});

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};

export const setupStore = () => {
  return configureStore({
    reducer: {
      game: rootReducer,
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
