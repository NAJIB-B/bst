import Modal from "../modal/modal";
import Styles from "./forgotPassword.module.css"
import InputWithIcon from "../inputWithIcon/inputWithIcon";
import {  FaEnvelope } from "react-icons/fa";
import {  AiOutlineCloseCircle } from "react-icons/ai";
import Overlay from "../overlay/overlay";
import Button from "../button/button";



const ForgotPassword = ({closeModal}) => {
    return ( 
    
        
        <Modal zIndex={"7"} width={"27%"}>
            <div className={Styles.main_container}>
                <div className={Styles.close_btn} onClick={closeModal}>
                    <AiOutlineCloseCircle size={25} color={"rgba(212, 158, 12, 1)"}></AiOutlineCloseCircle>
                </div>
            <h3>Forgot Password</h3>

            <InputWithIcon type={"text"} placeholder={"Email Address"}>
                <FaEnvelope></FaEnvelope>
            </InputWithIcon>

            <p className={Styles.text_under_input}>
            An email will be sent to you shorly with your new password
            </p>
             <Button
             fill={"rgba(212, 158, 12, 1)"}
             color={"rgba(10, 44, 78, 1)"}
             fontWeight={"600"}
             fontSize={"1rem"}
             width={"100%"}
             border={"0"}
             marginTop={"9rem"}
             radius={"0.5rem"}
             >Retrieve Password</Button>
            </div>
        </Modal>
        
        
     );
}
 
export default ForgotPassword;