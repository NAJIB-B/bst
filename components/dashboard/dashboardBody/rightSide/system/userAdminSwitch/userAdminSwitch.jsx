import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import Styles from "./userAdminSwitch.module.css"
const UserAdminSwitch = ({marginTop, onClick}) => {
    return ( 
        <>
        <div className={Styles.main_container} 
        onClick={onClick}
        style={{marginTop : marginTop ? marginTop : ""}}>
            <p className={Styles.item}>Admin</p>
            <HorizontalRule color={"rgba(118, 118, 128, 0.12)"}></HorizontalRule>
            <p className={Styles.item}>User</p>
            <HorizontalRule color={"rgba(118, 118, 128, 0.12)"}></HorizontalRule>
        </div>
        </>
     );
}
 
export default UserAdminSwitch;