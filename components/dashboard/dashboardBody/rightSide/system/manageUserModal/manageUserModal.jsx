import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import {  faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Styles from "./manageUserModal.module.css"
import Modal from "@/components/modal/modal";
import UserObjet from "./userObject/userObject";

const ManageUserModal = ({closeModal, veiwUser}) => {
    return ( 
        <Modal zIndex={"7"} width={"35%"} fixedHeight={"70vh"} fixed={true}>
        <div className={Styles.main_container}>
            <div className={Styles.close_btn} onClick={closeModal}>
            <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color:"rgba(212, 158, 12, 1)"}} />

            </div>
        <h3>Manage Users</h3>
        <div className={Styles.users_div}>


          
          <UserObjet veiwUser={veiwUser}></UserObjet>
          <UserObjet veiwUser={veiwUser}></UserObjet>
          <UserObjet veiwUser={veiwUser}></UserObjet>

          <UserObjet veiwUser={veiwUser}></UserObjet>
        
        </div>
      
        </div>
    </Modal>
    
     );
}
 
export default ManageUserModal;