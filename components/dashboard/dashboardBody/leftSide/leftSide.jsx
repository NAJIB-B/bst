import Styles from "./leftSide.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome , faGears, faLayerGroup, faCaretDown, faCaretUp, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import {   BsRobot} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDashboardMenu } from "@/redux/dashboard";
import { setSelectedReportOption } from "@/redux/dashboardMenuOptions";
import { dashboardMenu, reportOptions} from "@/utils/dashboard";


const LeftSide = () => {
  
    const dispatch = useDispatch()
const {selectedDashboardMenu} = useSelector((state)=> state.dashboard)
const {selectedReportOption} = useSelector((state)=> state.dashboardMenuOption)

    
  

    const menuItems = [
        {
            name: "Home",
            logo:
            <FontAwesomeIcon icon={faHome} size="xl"  />
            ,
            dropdown: false,
            onclickFunction: dashboardMenu.home,
        },
        {
            name: "Report",
            logo:  <FontAwesomeIcon icon={faNewspaper} size="xl"  />,
            dropdown: true,
            onclickFunction: dashboardMenu.report,
            selectedOption: selectedReportOption,
            optionSelector: setSelectedReportOption,
            menuOptions: [
                {
                name: " View Reports",
                onclickFunction: reportOptions.viewReports   
            },
                {
                name: " Upload Report Data",
                onclickFunction: reportOptions.uploadReportData  
            },
        ]
        },
        {
            name: "Data",
            logo: 
            <FontAwesomeIcon icon={faLayerGroup} size="xl"  />
            ,
            dropdown: false,
            onclickFunction: dashboardMenu.data,
        },
        {
            name: "Logic",
            logo: <BsRobot size={25}></BsRobot>,
            dropdown: false,
            onclickFunction: dashboardMenu.logic,
        },
        {
            name: "System",
            logo: 
            <FontAwesomeIcon icon={faGears} size="xl" />
            ,
            dropdown: false,
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
                  <>
                  
                 <div key={key} className={ selectedDashboardMenu == item.onclickFunction
                    ? Styles.active_menu : Styles.menu_item_div} 
                 onClick={()=>{dispatch(setSelectedDashboardMenu(item.onclickFunction))}}>
                  {item.logo} <p>{item.name}</p> 

                  {/* if dashboard is currently active add arrow pointing up instead of dropdown */}
                  {/* if menu item does not contain dropdown add a transparent dropdown */}

                  {selectedDashboardMenu == item.onclickFunction 
                  ? <>
                  {item.dropdown 
                    ? <FontAwesomeIcon icon={faCaretUp} size="lg" />

                    : <FontAwesomeIcon icon={faCaretUp} size="lg" style={{color: "transparent"}} /> }
                  </> 
                :
                <>
                 {item.dropdown 
                    ? <FontAwesomeIcon icon={faCaretDown} size="lg" />
                    : <FontAwesomeIcon icon={faCaretDown} size="lg" style={{color: "transparent"}} /> }
                </>
               }
               
                 </div>
                 {/* check if the menu item is selected before showing the menu options */}
                 {selectedDashboardMenu == item.onclickFunction?
                 <>
                 
                 {item.menuOptions ?
                 <>
                 {item.menuOptions.map((option, key)=>{
                    return(

                        <div key={key} className={item.selectedOption == option.onclickFunction?
                        Styles.activeOption : Styles.inActiveOption}
                        onClick={()=>{dispatch(item.optionSelector(option.onclickFunction))}}
                        ><p className={Styles.menuOption}>{option.name}</p></div>
                    )
                 })}
                 </>
                :
                ""}
                 </>
                 :"" 
                }
                 
                  </>
                  )
                })
            }
        </div>
     );
    }
    
    export default LeftSide;
    // {selectedDashboardMenu == item.onclickFunction 
    //  ? <div className={Styles.active_menu}>View Reports</div> : ""}    