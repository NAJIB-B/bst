import { useSelector } from "react-redux";
import Styles from "./rightSide.module.css"
import { dashboardMenu } from "@/utils/dashboard";
import Home from "./home/home";
import Report from "./report/report";
import Logic from "./logic/logic";
import System from "./system/system";
import Data from "./data/data";

const RightSide = () => {
    const {selectedDashboardMenu} = useSelector((state)=> state.dashboard)
    return ( 
        <div className={Styles.main_container}>
            <div className={Styles.inner_container}>

            { selectedDashboardMenu == dashboardMenu.home ? <Home></Home> : ""}
            { selectedDashboardMenu == dashboardMenu.report ? <Report></Report> : ""}
            { selectedDashboardMenu == dashboardMenu.data ? <Data></Data> : ""}
            { selectedDashboardMenu == dashboardMenu.logic ? <Logic></Logic> : ""}
            { selectedDashboardMenu == dashboardMenu.system ? <System></System> : ""}
        
            </div>
        </div>
     );
}
 
export default RightSide;