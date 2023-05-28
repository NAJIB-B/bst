import { useState } from "react"

import {  FaEnvelope} from "react-icons/fa";
import {  HiUserGroup} from "react-icons/hi";
import {  MdPersonAddAlt1} from "react-icons/md";

import SelectorNav from "../../selectorNav/selectorNav"
import Styles from "./system.module.css"
import Button from "@/components/button/button"
import UsersNavOption from "./navOptions/usersNavOption/usersNavOption";
import ProfilingNavOption from "./navOptions/profillingNavOption/profillingNavOption";
import ManageUserModal from "./manageUserModal/manageUserModal";
import Overlay from "@/components/overlay/overlay";
import UpdateUserModal from "./updateUserModal/updateUserModal";
import SuccessModal from "./successModal/successModal";
import DeleteUserModal from "./deleteUserModal/deleteUserModal";
import AddUserModal from "./addUserModal/addUserModal";
import EmailRecipientsModal from "./emailRecipientsModal/emailRecipientsModal";
import AddEmail from "./addEmail/addEmail";

const navOptions ={
    option1:"users",
    option2: "Profiling",
    option3: "Settings",
    option4: "Access Control",
    none: "none"
}

const System = () => {

    const [activeNavOption, setNavOption] = useState(navOptions.option1)

    const [manageUsers, setManageUsers] = useState(false)
    const [addUsers, setAddUsers] = useState(false)
    const [emailRecipients, setEmailRecipients] = useState(false)
    const [veiwingUser, setVeiwingUser] = useState(false)
    const [deletingUser, setDeletingUser] = useState(false)
    const [addEmail, setAddEmail] = useState(false)
    const [updateUserSuccess, setUpdateUserSuccess] =useState(false)
    const [deleteUserSuccess, setDeleteUserSuccess] =useState(false)
    const [addUserSuccess, setAddUserSuccess] =useState(false)
    const [addEmailSuccess, setAddEmailSuccess] =useState(false)

    const userUpdatedSuccessfully =()=>{
        setVeiwingUser(false)
        setUpdateUserSuccess(true)
    }
  
    const close_success_modal =()=>{
        setUpdateUserSuccess(false)
        setDeleteUserSuccess(false)
        setAddUserSuccess(false)
        setAddEmailSuccess(false)
    }

    const toogleVeiwUser =()=>{
        toogleManageUsersModal()
        setVeiwingUser(true)
    }
    const toogleManageUsersModal = ()=>{
        setManageUsers(!manageUsers)   
    }
    const goBackToManageUser =()=>{
        setVeiwingUser(false)
        setManageUsers(true)
    }
    const goBackToViewingUser =()=>{
        setDeletingUser(false)
        setVeiwingUser(true)
    }
    const gotoDeleteUser =()=>{
        setVeiwingUser(false)
        setDeletingUser(true)
    }
    const userDeletedSuccessfully =()=>{
        setDeletingUser(false)
        setDeleteUserSuccess(true)
    }
    const userAddedeSuccessfully =()=>{
        setAddUsers(false)
        setAddUserSuccess(true)
    }
    const toogleAddUserModal =()=>{
        setAddUsers(!addUsers)
    }
    const toogleEmailRecipientsModal =()=>{
        setEmailRecipients(!emailRecipients)
    }
    const gotoAddEmailModal =()=>{
        setEmailRecipients(false)
        setAddEmail(true)
    }
    const closeAddEmailModal=()=>{
        setAddEmail(false)
    }
    const emailAddedeSuccessfully =()=>{
        setAddEmail(false)
        setAddEmailSuccess(true)
    }

    return ( 
       <>
          <SelectorNav
            setActive={setNavOption}
            active={activeNavOption}
            optionsObject={navOptions}
            option1={navOptions.option1}
            option2={navOptions.option2}
            option3={navOptions.option3}
            option4={navOptions.option4}
            ></SelectorNav>

           
            {/* page main content */}

            {/* if navOption1 is selected */}
             {activeNavOption === navOptions.option1?
             <>
              <div className={Styles.top_nav}>
                <div className={Styles.left_side}>
                    <span className={Styles.text}>Administrator</span>
                </div>
                <div className={Styles.right_side}>
                    <Button
                    fill={"rgba(118, 118, 128, 0.12)"}
                    radius={"10px"}
                    color={"rgba(212, 158, 12, 1)"}
                    padding={"12px 10px"}
                    border={"0"}
                    action={toogleEmailRecipientsModal}
                    > <FaEnvelope size={15}></FaEnvelope> Email Recipients</Button>
                    <Button
                    fill={"rgba(118, 118, 128, 0.12)"}
                    radius={"10px"}
                    color={"rgba(212, 158, 12, 1)"}
                    padding={"12px 24px"}
                    border={"0"}
                    action={toogleManageUsersModal}> <HiUserGroup size={18}></HiUserGroup> Manage Users</Button>
                    <Button
                    fill={"transparent"}
                    radius={"10px"}
                    color={"rgba(212, 158, 12, 1)"}
                    padding={"12px 24px"}
                    border={"1px solid rgba(212, 158, 12, 1)"}
                    action={toogleAddUserModal}>
                        
                        <MdPersonAddAlt1 size={20}></MdPersonAddAlt1> Add Users</Button>
                </div>
            </div>
             <div className={Styles.users_container}>
             <UsersNavOption></UsersNavOption>
             </div>
             </>
         : null
             }
            {/* if navOption2 is selected */}
             {activeNavOption === navOptions.option2?
             
             <ProfilingNavOption></ProfilingNavOption>
             
         : null
             }
            
            {/* manage User modal */}
            {manageUsers ? 
            <>
            
            <ManageUserModal closeModal={toogleManageUsersModal} veiwUser={toogleVeiwUser}></ManageUserModal> 
            <Overlay></Overlay>
            </>: ""}
            {/* viewing user modal */}
            {veiwingUser ? 
            <>
            <UpdateUserModal closeModal={()=>{setVeiwingUser(false)}} 
            updateUser={userUpdatedSuccessfully} 
            goBack={goBackToManageUser}
            deleteUser={gotoDeleteUser}></UpdateUserModal>
           
            <Overlay></Overlay>
            </>: ""}
            {/* successfully updated user modal */}
            {updateUserSuccess ? 
            <>
            <SuccessModal text={"User Updated Sucessfully"} closeModal={close_success_modal}></SuccessModal>
            
            <Overlay></Overlay>
            </>: ""}
            {/* delete user modal */}
            {deletingUser ? 
            <>
            <DeleteUserModal deleteUser={userDeletedSuccessfully} goBack={goBackToViewingUser}></DeleteUserModal>
            
            <Overlay></Overlay>
            </>: ""}
            {/* successfully deleted user modal */}
            {deleteUserSuccess ? 
            <>
            <SuccessModal text={"User Deleted Sucessfully"} closeModal={close_success_modal}></SuccessModal>
            
            <Overlay></Overlay>
            </>: ""}
            {/* add user modal */}
            {addUsers ? 
            <>
            <AddUserModal  closeModal={toogleAddUserModal} addUser={userAddedeSuccessfully}></AddUserModal>
            
            <Overlay></Overlay>
            </>: ""}
            {/* successfully added user modal */}
            {addUserSuccess ? 
            <>
            <SuccessModal text={"User Added Sucessfully"} closeModal={close_success_modal}></SuccessModal>
            
            <Overlay></Overlay>
            </>: ""}
              {/* email recepient modal */}
              {emailRecipients ? 
            <>
            <EmailRecipientsModal  closeModal={toogleEmailRecipientsModal} addEmail={gotoAddEmailModal}></EmailRecipientsModal>
            
            <Overlay></Overlay>
            </>: ""}
              {/* add email modal */}
              {addEmail ? 
            <>
            <AddEmail  save={emailAddedeSuccessfully} closeModal={closeAddEmailModal}></AddEmail>
            
            <Overlay></Overlay>
            </>: ""}
             {/* successfully added email modal */}
             {addEmailSuccess ? 
            <>
            <SuccessModal text={"Email Added Sucessfully"} closeModal={close_success_modal}></SuccessModal>
            
            <Overlay></Overlay>
            </>: ""}
       </>
     );
}
 
export default System;