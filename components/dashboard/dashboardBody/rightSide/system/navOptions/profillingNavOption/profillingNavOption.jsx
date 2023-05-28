
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo} from '@fortawesome/free-solid-svg-icons';

import Button from "@/components/button/button";

import Styles from "./profillingNavOption.module.css"

const ProfilingNavOption = () => {
    return ( 
    <>
    
    <h3 className={Styles.heading}>Creator</h3>
    <div className={Styles.instructionDiv}>

    <FontAwesomeIcon icon={faCircleInfo} size="sm" style={{color:"rgba(79, 79, 79, 1)"}} />
    <span className={Styles.instructionText}>Please fill in your details correctly </span>
    </div>
    <div className={Styles.formRow}>

        <div className={Styles.formField}>

        <label>First Name</label>
        <input type="text" placeholder="First name..." />
        </div>
        <div className={Styles.formField}>

        <lable>Home/Office Address</lable>
        <input type="text" placeholder="Your house/office address" />
        </div>
    </div>
    <div className={Styles.formRow}>

        <div className={Styles.formField}>

        <label>Last Name</label>
        <input type="text" placeholder="Last name..." />
        </div>
        <div className={Styles.formField}>

        <lable>Phone Number</lable>
        <input type="text" placeholder="081XXXXXXX" />
        </div>
    </div>
    <div className={Styles.saveBtn}>
        <Button
        fill={"rgba(212, 158, 12, 1)"}
        color={"rgba(10, 44, 78, 1)"}
        fontWeight={"600"}
        fontSize={"16px"}
        height={"48px"}
        width={"350px"}
        radius={"4px"}
        padding={"12px"}
        border={"0px"}
        marginTop={"2rem"}
        >Save chages</Button>
    </div>
    </>
   
    );
}
 
export default ProfilingNavOption;