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
                    <div className={Styles.top}>sec_deals_ 2023-09028.cvx</div>
                    <div className={Styles.bottom}>
                        <span className={Styles.p}>#18282</span>
                        <span className={Styles.p}>Secondary</span>
                        <span>26 January 2022 to 11  March 2023</span>
                    </div>
                </div>
            </div>
            <div className={Styles.second_div}>
                <p className={Styles.p}>Run validation</p>
            </div>
            <div className={Styles.third_div}>
                <span>187 completed in 30s</span> 
                <BsFillCheckCircleFill color="rgba(39, 174, 96, 1)" size={18}></BsFillCheckCircleFill>
            </div>
            <div className={Styles.fourth_div}> 
               <div><FaUserCircle size={23}></FaUserCircle></div>
               <div className={Styles.right}>
                <span>Created By Tim Hardy</span>
                <span className={Styles.second_item}>
                    <span>03/09/2023.</span>
                    <span>17 votes</span>
                </span>
                <span>uuqigb</span>
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