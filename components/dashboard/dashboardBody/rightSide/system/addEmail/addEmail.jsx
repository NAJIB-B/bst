import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Styles from "./addEmail.module.css"
import Modal from "@/components/modal/modal";
import Button from "@/components/button/button";

const AddEmail = ({save, closeModal}) => {
    return ( 
        <>
         <Modal zIndex={"7"} width={"35%"} fixedHeight={"50vh"} fixed={true}>
        <div className={Styles.main_container}>
        <div className={Styles.close_btn} onClick={closeModal}>
            <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color:"rgba(212, 158, 12, 1)"}} />

            </div>
            
        <h3>Add Email</h3>

        <p className={Styles.email_text}>Email Address</p>
        <input className={Styles.email_input} type="text" placeholder="Oreoluwa.O@gmail.com" />
      
        <Button 
        fill={"rgba(212, 158, 12, 1)"}
        border={"0"}
        radius={"10px"}
        marginTop={"4rem"}
        color={"rgba(10, 44, 78, 1)"}
        padding={"14px 3px"}
        fontWeight={"600"}
       action={save}
        >Save</Button>
        </div>
    </Modal>
        </>
     );
}
 
export default AddEmail;