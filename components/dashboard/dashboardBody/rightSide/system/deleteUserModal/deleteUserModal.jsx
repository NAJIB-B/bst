import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  MdArrowBackIosNew, MdArrowDropDown } from "react-icons/md";
import {  FaTrash } from "react-icons/fa";
import {  faCircleXmark,  } from '@fortawesome/free-regular-svg-icons';
import Styles from "./deleteUserModal.module.css"
import Modal from "@/components/modal/modal";
import Button from "@/components/button/button";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import { useState } from "react";

const DeleteUserModal = ({deleteUser, goBack}) => {
    return ( 
        <Modal zIndex={"7"} width={"35%"} fixedHeight={"55vh"} fixed={true}>
        <div className={Styles.main_container}>
          
        <h3>Delete User</h3>
       

        <p className={Styles.top_text}>Are you sure you want to delete this user?</p>
        <p className={Styles.email_text}>Oreoluwa.O@gmail.com</p>

   
       

        <Button 
        fill={"transparent"}
        border={"1px solid rgba(255, 0, 0, 1)"}
        color={"rgba(255, 0, 0, 1)"}
        padding={"14px 3px"}
        radius={"10px"}
        marginTop={"4rem"}
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
        action={goBack}
        >Go Back</Button>

        </div>
    </Modal>
     );
}
 
export default DeleteUserModal;