import Styles from "./dashboardBody.module.css"
import LeftSide from "./leftSide/leftSide";
import RightSide from "./rightSide/rightSide";

const DashboardBody = () => {
    return ( 
        <div className={Styles.main_container}>
            <div className={Styles.left_side}> <LeftSide></LeftSide></div>
            <div className={Styles.right_side}> <RightSide></RightSide></div>
        </div>
     );
}
 
export default DashboardBody;