import Styles from "./userObject.module.css"
import {  MdNavigateNext } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";

const UserObjet = ({veiwUser}) => {
    return ( 
        <>
        
        <div className={Styles.main_container} onClick={veiwUser}>
        <div className={Styles.left_side}>
            <div><input type="checkbox" name="" id="" /></div>
            <div className={Styles.user_icon}><FaUserCircle size={30}></FaUserCircle></div>
            <div className={Styles.left_side}>
                <span className={Styles.top}>Oreoluwa.O@gmail.com</span>
                <span className={Styles.bottom}>User</span>
            </div>
        </div>
        <div className={Styles.right_side}>
            <span className={Styles.next}> <MdNavigateNext size={30}></MdNavigateNext></span>
        </div>

    </div> 
    <div className={Styles.hr_div}>

    <HorizontalRule color={"rgba(118, 118, 128, 0.12)"} ></HorizontalRule>
    </div>
        </>
     );
}
 
export default UserObjet;