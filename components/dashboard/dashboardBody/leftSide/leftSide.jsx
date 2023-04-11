import Styles from "./leftSide.module.css"
import {  HiHome} from "react-icons/hi";
import {  BsCalculatorFill, BsStack, BsRobot, BsGearFill} from "react-icons/bs";
import {  MdArrowDropDown} from "react-icons/md";
import { RiArrowUpSFill} from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDashboardMenu } from "@/redux/dashboard";
import { dashboardMenu } from "@/utils/dashboard";


const LeftSide = () => {
  
    const dispatch = useDispatch()
const {selectedDashboardMenu} = useSelector((state)=> state.dashboard)

    
  

    const menuItems = [
        {
            name: "Home",
            logo: <HiHome size={25}></HiHome>,
            dropdown: false,
            onclickFunction: dashboardMenu.home,
        },
        {
            name: "Report",
            logo: <BsCalculatorFill size={25}></BsCalculatorFill>,
            dropdown: true,
            onclickFunction: dashboardMenu.report,
        },
        {
            name: "Data",
            logo: <BsStack size={25}></BsStack>,
            dropdown: true,
            onclickFunction: dashboardMenu.data,
        },
        {
            name: "Logic",
            logo: <BsRobot size={25}></BsRobot>,
            dropdown: true,
            onclickFunction: dashboardMenu.logic,
        },
        {
            name: "System",
            logo: <BsGearFill size={25}></BsGearFill>,
            dropdown: true,
            onclickFunction: dashboardMenu.system,
        },
     
    ]

    return ( 
        <div className={Styles.main_container}>
                 {/* <div className={Styles.active_menu}>
                 <HiHome size={25}></HiHome> <p>Home</p> 
                 <RiArrowUpSFill size={25} ></RiArrowUpSFill>
                 </div> */}
            {
                menuItems.map((item, key)=>{
                  return(

                 <div className={ selectedDashboardMenu == item.onclickFunction
                    ? Styles.active_menu : Styles.menu_item_div} 
                 onClick={()=>{dispatch(setSelectedDashboardMenu(item.onclickFunction))}}>
                  {item.logo} <p>{item.name}</p> 

                  {/* if dashboard is currently active add arrow pointing up instead of dropdown */}
                  {/* if menu item does not contain dropdown add a transparent dropdown */}

                  {selectedDashboardMenu == item.onclickFunction 
                  ? <>
                  {item.dropdown 
                    ? <RiArrowUpSFill size={25}></RiArrowUpSFill> 
                    : <RiArrowUpSFill size={25} color={"transparent"}></RiArrowUpSFill> }
                  </> 
                :
                <>
                 {item.dropdown 
                    ? <MdArrowDropDown size={25}></MdArrowDropDown> 
                    : <MdArrowDropDown size={25} color={"transparent"}></MdArrowDropDown> }
                </>
               }
                 </div>
                  )
                })
            }
        </div>
     );
}
 
export default LeftSide;