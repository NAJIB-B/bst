import { createSlice } from "@reduxjs/toolkit";
import { dashboardMenu } from "@/utils/dashboard";

const initialState ={
selectedDashboardMenu : dashboardMenu.home,

}

export const dashboardSlice = createSlice({
    name:"dashboard",
    initialState,
    reducers:{
        setSelectedDashboardMenu: (state, action) =>{
          state.selectedDashboardMenu = action.payload
        }
    }
})

export const {setSelectedDashboardMenu} = dashboardSlice.actions

export default dashboardSlice.reducer