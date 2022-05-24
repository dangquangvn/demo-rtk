import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./services/contactsApi";

const rootReducer = {
  // Add the generated reducer as a specific top-level slice
  [contactsApi.reducerPath]: contactsApi.reducer,
};

export const store = configureStore({
  reducer: { rootReducer },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
