import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboard";
import dashboardMenuOptionReducer from "./dashboardMenuOptions";
import userReducer from "./user";
import { bstApi } from "./services/api";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    dashboardMenuOption: dashboardMenuOptionReducer,
    user: userReducer,
    [bstApi.reducerPath]: bstApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bstApi.middleware),
});

export default store;
