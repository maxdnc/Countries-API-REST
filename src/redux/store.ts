import { configureStore } from "@reduxjs/toolkit";
import filteredParameterReducer from "./filteredParameterSlice";
import searchFormReducer from "./searchFormSlice";
import filterFormReducer from "./filterFormSlice";

const store = configureStore({
  reducer: {
    filteredParameter: filteredParameterReducer,
    searchForm: searchFormReducer,
    filterForm: filterFormReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
