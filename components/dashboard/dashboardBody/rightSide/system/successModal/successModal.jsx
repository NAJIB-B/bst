
import {  BsFillCheckCircleFill } from "react-icons/bs";

import Styles from "./successModal.module.css"
import Modal from "@/components/modal/modal";
import Button from "@/components/button/button";


const SuccessModal = ({text, closeModal}) => {
    return ( 
        <Modal zIndex={"7"} width={"25%"} fixedHeight={"42vh"} fixed={true}>
        <div className={Styles.main_container}>
           
        
        <BsFillCheckCircleFill size={100}></BsFillCheckCircleFill>

     <p className={Styles.text}>{text}</p>

   
       
        <Button 
        fill={"rgba(212, 158, 12, 1)"}
        border={"0"}
        radius={"10px"}
        marginTop={"1rem"}
        width={"50%"}
        color={"rgba(10, 44, 78, 1)"}
        padding={"14px 3px"}
        fontWeight={"600"}
        action={closeModal}
        >Done</Button>
        </div>

        


        
    </Modal>
     );
}
 
export default SuccessModal;