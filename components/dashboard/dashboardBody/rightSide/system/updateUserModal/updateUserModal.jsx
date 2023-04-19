import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  MdArrowBackIosNew, MdArrowDropDown } from "react-icons/md";
import {  FaTrash } from "react-icons/fa";
import {  faCircleXmark,  } from '@fortawesome/free-regular-svg-icons';
import Styles from "./updateUserModal.module.css"
import Modal from "@/components/modal/modal";
import Button from "@/components/button/button";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import { useState } from "react";
import UserAdminSwitch from "../userAdminSwitch/userAdminSwitch";


const UpdateUserModal = ({closeModal, goBack, updateUser, deleteUser}) => {

   const [showDropdown, setShowDropdown] = useState(false)
   const toogleDropdown =()=>{
    setShowDropdown(!showDropdown)
   }

    return ( 
        <Modal zIndex={"7"} width={"35%"} fixedHeight={"73vh"} fixed={true}>
        <div className={Styles.main_container}>
            <div className={Styles.close_btn} onClick={closeModal}>
            <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color:"rgba(212, 158, 12, 1)"}} />
            </div>
            <div className={Styles.back_btn} onClick={goBack}>
            <MdArrowBackIosNew size={25} color="rgba(212, 158, 12, 1)" />
            </div>
        <h3>Manage Users</h3>
        <div className={Styles.top_section}>

        <p className={Styles.mini_heading}>Email Address</p>
        <input className={Styles.email_input} type="text" placeholder="Oreoluwa.O@gmail.com"/>
        <p className={Styles.mini_heading}>Change Role</p>

        <div className={Styles.change_user} onClick={toogleDropdown}>
        <span>User</span>
        <MdArrowDropDown size={25}></MdArrowDropDown>
    
        {showDropdown ? <UserAdminSwitch marginTop={"11rem"} onClick={toogleDropdown}></UserAdminSwitch> : ""}
        </div>
        
        
        </div>

        <Button 
        fill={"transparent"}
        border={"1px solid rgba(255, 0, 0, 1)"}
        color={"rgba(255, 0, 0, 1)"}
        padding={"14px 3px"}
        radius={"10px"}
        marginTop={"1rem"}
        justifyLogoCenter={true}
        logoGap={"1rem"}
        fontWeight={"600"}
        action={deleteUser}
        ><FaTrash></FaTrash> Delete User </Button>

        <Button 
        fill={"rgba(212, 158, 12, 1)"}
        border={"0"}
        radius={"10px"}
        marginTop={"1rem"}
        color={"rgba(10, 44, 78, 1)"}
        padding={"14px 3px"}
        fontWeight={"600"}
        action={updateUser}
        >Save Changes</Button>

        </div>
    </Modal>
     );
}
 
export default UpdateUserModal;