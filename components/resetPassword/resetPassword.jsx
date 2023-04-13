import Modal from "../modal/modal";
import InputWithIcon from "../inputWithIcon/inputWithIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock  } from '@fortawesome/free-solid-svg-icons';
import Button from "../button/button";
import Styles from "./resetPassword.module.css"

const ResetPassword = () => {
    return ( 
        <Modal>
            <h3>Reset Password</h3>

            <InputWithIcon type={"text"} placeholder={"Email Address"} marginBottom={"1rem"}>
            <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color:"rgba(10, 44, 78, 1)"}} />

            </InputWithIcon>

            <InputWithIcon type={"text"} placeholder={" Enter New Password"}  marginBottom={"1rem"}>
            <FontAwesomeIcon icon={faLock} size="lg" style={{color:"rgba(10, 44, 78, 1)"}} />
            </InputWithIcon>

            <InputWithIcon type={"text"} placeholder={"Confirm New Password"} marginBottom={"1rem"}>
            <FontAwesomeIcon icon={faLock} size="lg" style={{color:"rgba(10, 44, 78, 1)"}} />
            </InputWithIcon>

            <p className={Styles.text_under_inputs}>
            Password must contain 8  characters, One Uppercase, 
            lowercase or more,  and special character. 
            </p>

            <Button
            fill={"rgba(212, 158, 12, 1)"}
            color={"rgba(10, 44, 78, 1)"}
            fontWeight={"600"}
            fontSize={"1rem"}
            width={"100%"}
            border={"0"}
            marginTop={"1.5rem"}
            radius={"0.5rem"}
            padding={"9px 5px"}
            >Reset  Password</Button>
        </Modal>
      );
}
 
export default ResetPassword;