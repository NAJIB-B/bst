import Styles from "./dashboardNav.module.css"
import Image from "next/image";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import {  FaBell, FaUserCircle } from "react-icons/fa";
import {  AiOutlineQuestionCircle} from "react-icons/ai";
import {  MdArrowDropDown} from "react-icons/md";


const DashboardNav = () => {
    return ( 
        <div className={Styles.outer_container}>
            <div className={Styles.inner_container}>
                <div className={Styles.top_section}>
                    <div>
                        <Image  className={Styles.top_section_logo}
                         src={"./logo.svg"} width={105} height={105}></Image>
                    </div>
                    <div className={Styles.top_section_right}>
                       <div className={Styles.nav_link_div}><FaBell size={20}></FaBell> <span>Notifications</span></div>
                       <div className={Styles.nav_link_div}><AiOutlineQuestionCircle size={20}></AiOutlineQuestionCircle> 
                       <span>Help</span> <MdArrowDropDown size={20}></MdArrowDropDown>
                       </div>
                       <div><FaUserCircle size={20}></FaUserCircle></div>
                    </div>
                </div>

                <HorizontalRule color={"rgba(118, 118, 128, 0.12)"} marginTop={"0"}></HorizontalRule>
            </div>
        </div>
     );
}
 
export default DashboardNav;