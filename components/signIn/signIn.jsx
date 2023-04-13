import Modal from "../modal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import Styles from "./signIn.module.css"
import Button from "../button/button";
import ForgotPassword from "../forgotPassword/forgotPassword";
import { useState } from "react";
import Overlay from "../overlay/overlay";
import { useRouter } from "next/router";
import ResetPassword from "../resetPassword/resetPassword";

const defaultFormFields={
   password:"",   
   email:"",
}

const SignIn = () => {
   const router = useRouter()
   const [formFields, setFormFields]= useState(defaultFormFields)
    const {password, email} = formFields

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const validate =()=>{
      if (
         !new RegExp(
           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         ).test(email)
       ) {
        setEmailError(true)
   
         return
       } else {
         setEmailError(false)
       }
      if (!password.trim()) {
         setPasswordError(true)
         return
       } else {
         setPasswordError(false)
       }
       router.push("/dashboard")
    }

    const change =(e)=>{
     const {name, value} = e.target;
     setFormFields({...formFields, [name]:value})
    }

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
            <FontAwesomeIcon icon={faUser} size="xl" style={{color:"rgba(10, 44, 78, 1)"}} />
               <input 
               className={Styles.input}
               type="text" 
               placeholder="Email"
               name="email"
               value={email}
               onChange={change}/>
            </div>
            {emailError ? (
            <p className={Styles.error_message}> Please input a valid email</p>
          ) : null}
            <div className={Styles.input_div}> 
            <FontAwesomeIcon icon={faLock} size="xl" style={{color:"rgba(10, 44, 78, 1)"}} />
               <input 
               className={Styles.input}
               name="password"
               type="text" 
               placeholder="Password"
               value={password}
               onChange={change}/>
            </div>
            {passwordError ? (
            <p className={Styles.error_message}> Please input your password</p>
          ) : null}
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
            padding={"0.5rem"}
            marginTop={"2rem"}
            fontWeight={"600"}
            fontSize={"1.1rem"}
            action={validate}>
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