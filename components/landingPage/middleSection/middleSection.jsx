import SignIn from "@/components/signIn/signIn";
import Styles from "./middleSection.module.css"


const MiddleSection = () => {
    return ( 
      

        <div className={Styles.main_div}>
     
            <SignIn></SignIn>
            <div className={Styles.overlay}>
        </div>
        </div>
     );
}
 
export default MiddleSection;