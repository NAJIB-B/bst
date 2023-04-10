import Modal from "../modal/modal";
import {FaUserAlt, FaLock} from "react-icons/fa"
import Styles from "./signIn.module.css"
import Button from "../button/button";
import ForgotPassword from "../forgotPassword/forgotPassword";
import { useState } from "react";
import Overlay from "../overlay/overlay";
import ResetPassword from "../resetPassword/resetPassword";

const SignIn = () => {
   const [overlay, setOverlay] = useState(false)
   const closeForgotPassword =()=>{
      setOverlay(false)
   }

    return ( 
      <>
    
      
      {/* <ResetPassword></ResetPassword> */}
        <Modal>
        
            <h3 className={Styles.heading}>Sign in</h3>
            <div className={Styles.top_section}>

            <div className={Styles.input_div}> 
               <FaUserAlt size={25}></FaUserAlt>
               <input 
               className={Styles.input}
               type="text" 
               placeholder="Email"/>
            </div>
            <div className={Styles.input_div}> 
               <FaLock size={25}></FaLock>
               <input 
               className={Styles.input}
               type="text" 
               placeholder="Password"/>
            </div>
            <div className={Styles.input_checkbox}> 
               <input type="checkbox"></input>
                <p>Remember me</p>
            </div>
            </div>
            <Button 
            fill={"rgba(212, 158, 12, 1)"} 
            color={"rgba(10, 44, 78, 1)"}
            width={"80%"}
            label={"Log in"}
            border={"none"}
            radius={"0.5rem"}
            marginTop={"2rem"}
            fontWeight={"600"}
            fontSize={"1.1rem"}>
            </Button>

            <p onClick={()=>{setOverlay(true)}} className={Styles.forgot_password_text}>Forgot your password?</p>
        </Modal>
        {overlay ? (
         <>
         <ForgotPassword closeModal={closeForgotPassword}></ForgotPassword>
         <Overlay></Overlay>
         </>
        ): ""}
      </>
     );
}
 
export default SignIn;