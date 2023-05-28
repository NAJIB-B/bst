import Styles from "./reportObject.module.css"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import HorizontalRule from "@/components/horizontalRule/horizontalRule";

const ReportObject = () => {
    return (
        <>

       
        <div className={Styles.main_container}>
            <div className={Styles.first_div}>
                <div><input type="checkbox" /></div>
                <div className={Styles.first_div_right}>
                    <div className={Styles.top}>MBR-350.cvx</div>
                    <div className={Styles.bottom}>
                        <p className={Styles.p}>Donec nibh laoreet id nibh lorem. </p>
                    </div>
                </div>
            </div>
            <div className={Styles.second_div}>
                <p className={Styles.p}>26 January 2022 to 11  March 2023</p>
            </div>
            <div className={Styles.third_div}>
                <span>187 completed in 30s</span> 
                <BsFillCheckCircleFill color="rgba(39, 174, 96, 1)" size={18}></BsFillCheckCircleFill>
            </div>
            <div className={Styles.fourth_div}> 
               <div><FaUserCircle size={23}></FaUserCircle></div>
               <div className={Styles.right}>
                <span>Created By Tim Hardy</span>
               
               </div>
            </div>
            <div className={Styles.view_report}>
                View Report
            </div>
        </div>
        <div className={Styles.hr_div}>

<HorizontalRule 
color={"rgba(118, 118, 128, 0.12)"} 
marginTop={"1rem"}
marginBottom={"0.8rem"}></HorizontalRule>
</div>
        </>
      );
}
 
export default ReportObject;