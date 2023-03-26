import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "@slices/Counter";
import sideBarReducer from "@slices/SideBar";

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        counter: counterReducer,
        sideBar: sideBarReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
