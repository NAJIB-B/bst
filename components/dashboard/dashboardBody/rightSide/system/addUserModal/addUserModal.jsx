import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import {  faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Styles from "./addUserModal.module.css"
import Modal from "@/components/modal/modal";
import Button from "@/components/button/button";
import InputWithIcon from "@/components/inputWithIcon/inputWithIcon";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import {  MdArrowDropDown } from "react-icons/md";
import { useState } from "react";




const AddUserModal = ({closeModal, addUser}) => {

    const [showDropdown, setShowDropdown] = useState(false)
   const toogleDropdown =()=>{
    setShowDropdown(!showDropdown)
   }

    return ( 
        <>
           <Modal zIndex={"7"} width={"35%"} fixedHeight={"70vh"} fixed={true}>
        <div className={Styles.main_container}>
            <div className={Styles.close_btn} onClick={closeModal}>
            <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color:"rgba(212, 158, 12, 1)"}} />

            </div>
        <h3>Add  User</h3>
        <div className={Styles.change_user_div}>

        <div className={Styles.change_user} onClick={toogleDropdown}>
        <span>User</span>
        <MdArrowDropDown size={25}></MdArrowDropDown>
        { showDropdown ? 
        
        <div className={Styles.change_user_dropdown} onClick={toogleDropdown}>
            <span>Admin</span>
            <HorizontalRule color={"black"} width={"100%"}></HorizontalRule>
            <span>User</span>
            <HorizontalRule color={"black"} width={"100%"}></HorizontalRule>
        </div>
        : ""
    }
        </div>
        </div>
      
<div className={Styles.top_section}>


            <InputWithIcon type={"text"} placeholder={"Email Address"} marginBottom={"1rem"}>
            <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color:"rgba(10, 44, 78, 1)"}} />

            </InputWithIcon>

            <InputWithIcon type={"text"} placeholder={"Employee Code(optional)"} marginBottom={"1rem"}>
            <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color:"rgba(10, 44, 78, 1)"}} />

            </InputWithIcon>
</div>

            
        <Button 
        fill={"rgba(212, 158, 12, 1)"}
        border={"0"}
        radius={"10px"}
        marginTop={"4rem"}
        width={"100%"}
        color={"rgba(10, 44, 78, 1)"}
        padding={"14px 3px"}
        fontWeight={"600"}
        action={addUser}
        >Add User</Button>
      
        </div>
    </Modal>
    
        </>
     );
}
 
export default AddUserModal;