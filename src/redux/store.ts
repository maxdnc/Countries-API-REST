import { configureStore } from "@reduxjs/toolkit";
import filteredParameterReducer from "./features/filteredParameterSlice";
import searchFormReducer from "./features/searchFormSlice";
import filterFormReducer from "./features/filterFormSlice";
import favoritesReducer from "./features/favoriteCountriesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  filteredParameter: filteredParameterReducer,
  searchForm: searchFormReducer,
  filterForm: filterFormReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
