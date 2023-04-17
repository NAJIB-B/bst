import Styles from "./archiveReportObject.module.css"
import {  FiUpload } from "react-icons/fi";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";

const ArchiveReportObject = () => {
    return ( 
        <>
        
    <div className={Styles.main_container}>
        <div className={Styles.left_side}>
            <div className={Styles.checkbox}><input type="checkbox" name="" id="" /></div>
            <div className={Styles.left_side}>
                <span className={Styles.top}>AE BBK FULL 3.0</span>
                <span className={Styles.bottom}>March, 2023.</span>
            </div>
        </div>
        <div className={Styles.right_side}>
            <span className={Styles.download}>Download <FiUpload></FiUpload></span>
        </div>

    </div> 
    <div className={Styles.hr_div}>

    <HorizontalRule color={"rgba(118, 118, 128, 0.12)"} ></HorizontalRule>
    </div>
        </>
    );
}
 
export default ArchiveReportObject;