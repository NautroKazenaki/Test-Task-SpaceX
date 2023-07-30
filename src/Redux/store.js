import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {api} from '../Api/api.js'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch)