import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import validator from "validator";
import { useDispatch } from "react-redux";


import {useLoginUserMutation} from "../../redux/services/api"
import {setLoginProfile, setUserAuth} from "../../redux/user"
import Modal from "../modal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import Styles from "./signIn.module.css"
import Button from "../button/button";
import ForgotPassword from "../forgotPassword/forgotPassword";
import { useState } from "react";
import Overlay from "../overlay/overlay";
import { useRouter } from "next/router";
import Loading from "../loading/loading";


const defaultFormFields={
   password:"",   
   email:"",
}

const SignIn = () => {


  const dispatch = useDispatch()
   const router = useRouter()
   const [loginUser, {data,  isLoading, isSuccess}] = useLoginUserMutation()

   const [formFields, setFormFields]= useState(defaultFormFields)
    const {password, email} = formFields

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

   

    const validate = async ()=>{
      if (!validator.isEmail(email)) {
        console.log('please input valid email')
        setEmailError(true)
         return
       } else {
         setEmailError(false)
       }
      if (validator.isEmpty(password)) {
         setPasswordError(true)
         return
       } else {
         setPasswordError(false)
       }
       //super admin details
      //  adminEmail= "super-admin@mail.com"
      //   adminPassword= "AccessReportSuperAdmin@1234"
       loginUser({email, password})
       .unwrap()
       .then(result => {
        dispatch(setUserAuth(result.data.token)) 
        dispatch(setLoginProfile(true))
        
       }).then(()=>{
        router.push("/dashboard")
      console.log(data)})
       .catch(error => {
        console.error(error)
        toast.error(error.data.Message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    
          setFormFields({email:"", password:""})
       })
        
      
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


      {/* For logging error */}
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      ></ToastContainer>

      {/* while page is loading or loggin is successful*/}
      {isLoading || isSuccess ?
       <>
       <Overlay></Overlay>
       <Loading></Loading>
     </>
       : null}

    
      
        <Modal>          
        
            <h3 className={Styles.heading}>Sign in</h3>
            <div className={Styles.top_section}>

            <div className={Styles.input_div}> 
            <FontAwesomeIcon icon={faUser} size="md" style={{color:"rgba(10, 44, 78, 1)"}} />
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
            <FontAwesomeIcon icon={faLock} size="md" style={{color:"rgba(10, 44, 78, 1)"}} />
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
                <p className={Styles.remember_me}>Remember me</p>
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
            fontSize={"1rem"}
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