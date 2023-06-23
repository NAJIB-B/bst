import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboard";
import dashboardMenuOptionReducer from "./dashboardMenuOptions";
import { bstApi } from "./services/api";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    dashboardMenuOption: dashboardMenuOptionReducer,
    [bstApi.reducerPath]: bstApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bstApi.middleware),
});

export default store;
