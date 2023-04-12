import { createSlice } from "@reduxjs/toolkit";
import {  reportOptions, logicOptions, dataOptions,  } from "@/utils/dashboard";

const initialState ={
selectedReportOption : reportOptions.viewReports,
selectedLogicOption : logicOptions.logicOverview,
selectedDataOption : dataOptions.dataOverview,


}

export const dashboardMenuOptionSlice = createSlice({
    name:"dashboardMenuOption",
    initialState,
    reducers:{
        setSelectedReportOption: (state, action) =>{
          state.selectedReportOption = action.payload
        },
        setSelectedLogicOption: (state, action) =>{
          state.selectedLogicOption = action.payload
        },
        setSelectedDataOption: (state, action) =>{
          state.selectedDataOption = action.payload
        },
    }
})

export const {setSelectedDataOption, setSelectedLogicOption, setSelectedReportOption} = dashboardMenuOptionSlice.actions

export default dashboardMenuOptionSlice.reducer