import Modal from "../modal/modal";
import Styles from "./forgotPassword.module.css"
import InputWithIcon from "../inputWithIcon/inputWithIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import {  faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Button from "../button/button";



const ForgotPassword = ({closeModal}) => {
    return ( 
    
        
        <Modal zIndex={"7"} width={"27%"}>
            <div className={Styles.main_container}>
                <div className={Styles.close_btn} onClick={closeModal}>
                <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color:"rgba(212, 158, 12, 1)"}} />

                </div>
            <h3>Forgot Password</h3>

            <InputWithIcon type={"text"} placeholder={"Email Address"}>
                <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color:"rgba(10, 44, 78, 1)"}} />

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
             padding={"12px 5px"}
             >Retrieve Password</Button>
            </div>
        </Modal>
        
        
     );
}
 
export default ForgotPassword;