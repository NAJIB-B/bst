import Styles from "./landingPageNav.module.css"
import Image from "next/image";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot , faPhone } from '@fortawesome/free-solid-svg-icons';


const LandingPageNav = () => {
    return ( 
        <div className={Styles.outer_container}>
            <div className={Styles.inner_container}>
                <div className={Styles.top_section}>
                    <div className={Styles.logo}>
                        <Image src={"./logo.svg"} width={145} height={105}></Image>
                    </div>
                    <div className={Styles.top_section_right}>
                        <div className={Styles.contact_details}>
                            <div>
                            <FontAwesomeIcon icon={faLocationDot} size="xl" style={{color:"rgba(60, 60, 67, 0.6)"}} />
                                </div>
                            <div>
                                <p>1, Ajiboye Street, Obata Avenue, Off Olu Akerele Street, Ikeja, Lagos</p>
                            </div>
                        </div>
                        <div className={Styles.contact_details}>
                            <div>
                            <FontAwesomeIcon icon={faPhone} size="xl" style={{color:"rgba(60, 60, 67, 0.6)"}} />
                               </div>
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