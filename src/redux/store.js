// import { createStore } from "redux";
// import testReducers from "./reducers/testReducers";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { apiSlice } from "./slices/apiSlice";
import authReducer from "./slices/authSlice";

// const store = createStore(testReducers);

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: [apiSlice.reducerPath],
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // reducer: persistedReducer,
  reducer: persistReducer(persistConfig, rootReducer),
  // {
  //   [apiSlice.reducerPath]: apiSlice.reducer,
  //   auth: authReducer,

  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck:false,
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: import.meta.env.VITE_NODE_ENV === "development" ? true : false,
});

export let persistor = persistStore(store);

export default store;
