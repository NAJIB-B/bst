
import {  BsFillCheckCircleFill } from "react-icons/bs";

import Styles from "./successModal.module.css"
import Modal from "@/components/modal/modal";
import Button from "@/components/button/button";


const SuccessModal = ({text, closeModal}) => {
    return ( 
        <Modal zIndex={"7"} 
        borderRadius={"4.5px"} 
        padding={"36.0599px 60.5291px 41.2113px"}  
        width={"387.04px"} 
        fixedHeight={"348.43px"} 
        fixed={true}>
        <div className={Styles.main_container}>
           
        
        <BsFillCheckCircleFill size={129}></BsFillCheckCircleFill>

     <p className={Styles.text}>{text}</p>

   
       
        <Button 
        fill={"rgba(212, 158, 12, 1)"}
        border={"0"}
        radius={"10px"}
        marginTop={"1rem"}
        width={"180.94px"}
        color={"rgba(10, 44, 78, 1)"}
        padding={"0px, 21px, 10px, 21px"}
        fontWeight={"700"}
        fontSize={"18px"}
        height={"48.65px"}
        action={closeModal}
        >Done</Button>
        </div>

        


        
    </Modal>
     );
}
 
export default SuccessModal;