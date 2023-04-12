import { configureStore} from "@reduxjs/toolkit";
import dashboardReducer from "./dashboard"
import dashboardMenuOptionReducer from "./dashboardMenuOptions"





const store = configureStore({
    reducer:{
        dashboard: dashboardReducer,
        dashboardMenuOption: dashboardMenuOptionReducer,
    },
})


export default store