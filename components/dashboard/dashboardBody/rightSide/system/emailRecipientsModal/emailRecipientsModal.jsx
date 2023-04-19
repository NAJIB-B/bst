
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import {  faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Styles from "./emailRecipientsModal.module.css"
import Modal from "@/components/modal/modal";
import UserObjet from "./userObject/userObject";

import Button from "@/components/button/button";
import InputWithIcon from "@/components/inputWithIcon/inputWithIcon";
import {   FaSearch } from "react-icons/fa";
import {  FaTrash } from "react-icons/fa";

const EmailRecipientsModal = ({closeModal, addEmail }) => {
    return ( 
        <Modal zIndex={"7"} width={"35%"} fixedHeight={"70vh"} fixed={true}>
            
            <div className={Styles.main_container}>
            <div className={Styles.close_btn} onClick={closeModal}>
            <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color:"rgba(212, 158, 12, 1)"}} />

            </div>
        <h3>Email Recipients</h3>
        <InputWithIcon 
        type={"text"}
        placeholder={"Search Reports"}
        backgroundColor={"rgba(250, 250, 250, 1)"}
        borderColor={"rgba(118, 118, 128, 0.12)"}
        > <FaSearch size={20}></FaSearch></InputWithIcon>
        <div className={Styles.action_section}>
    <div className={Styles.action_section_left}>
    <input type="checkbox" />
    <p className={Styles.first_text}>Showing 305 reports out of 1093</p>
    <p className={Styles.second_text}>0 Selected</p>
    </div>
    <div className={Styles.action_section_right}>
    <Button 
    fill={"transparent"} 
    color={"rgba(212, 158, 12, 1)"} 
    radius={"0.625rem"}
    width={"100%"}
    padding={"0.35rem"}
    border={"1px solid rgba(212, 158, 12, 1)"}
    action={addEmail}>Add Email +</Button>
    </div>
</div>
        <div className={Styles.users_div}>


          
          <UserObjet></UserObjet>
          <UserObjet></UserObjet>
          <UserObjet></UserObjet>

          <UserObjet></UserObjet>
          <UserObjet></UserObjet>
          <UserObjet></UserObjet>
          <UserObjet></UserObjet>

          <UserObjet></UserObjet>
        </div>
        <div className={Styles.delete_user_div}>
        <Button 
        fill={"transparent"}
        border={"1px solid rgba(60, 60, 67, 0.6)"}
        color={"rgba(60, 60, 67, 0.6)"}
        padding={"8px 3px"}
        radius={"10px"}
        marginTop={"1rem"}
        justifyLogoCenter={true}
        logoGap={"1rem"}
        fontWeight={"600"}
        
        ><FaTrash></FaTrash> Delete User </Button>
   </div>
        </div>
    </Modal>
    
     );
}
 
export default EmailRecipientsModal;
