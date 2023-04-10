import Styles from "./landingPageNav.module.css"
import Image from "next/image";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import {  FaPhone } from "react-icons/fa";
import {  HiLocationMarker} from "react-icons/hi";


const LandingPageNav = () => {
    return ( 
        <div className={Styles.outer_container}>
            <div className={Styles.inner_container}>
                <div className={Styles.top_section}>
                    <div>
                        <Image src={"./logo.svg"} width={105} height={105}></Image>
                    </div>
                    <div className={Styles.top_section_right}>
                        <div className={Styles.contact_details}>
                            <div><HiLocationMarker size={22} color={"rgba(60, 60, 67, 0.6)"}></HiLocationMarker></div>
                            <div>
                                <p>1, Ajiboye Street, Obata Avenue, Off Olu Akerele Street, Ikeja, Lagos</p>
                            </div>
                        </div>
                        <div className={Styles.contact_details}>
                            <div><FaPhone size={16} color={"rgba(60, 60, 67, 0.6)"}></FaPhone></div>
                            <div>
                                <p>+44 13 7527 1001</p>
                            </div>
                        </div>
                    </div>
                </div>

                <HorizontalRule color={"rgba(118, 118, 128, 0.12)"} marginTop={"0"}></HorizontalRule>
            </div>
        </div>
     );
}
 
export default LandingPageNav;