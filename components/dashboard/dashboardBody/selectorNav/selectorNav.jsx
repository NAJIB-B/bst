import Styles from "./selectorNav.module.css"
import HorizontalRule from "@/components/horizontalRule/horizontalRule";

// to use selector nav, you can pass in a maximum of 5 option which you can increase your self.
// then pass in an object that contains all the options and their value i.e "optionsObject"
// create a useState hook in the component that wants to use the selector nav
// pass in the initial state i.e which should be set to one of option object
// pass in the setter to change the selected nav when an option is clicked.
// check out report.jsx to see the usage

const SelectorNav = (props) => {
    const {option1, option2, option3, option4, option5, active, setActive, optionsObject} = props

    

    return ( 
      <>
      
        <div className={Styles.nav}>
         {
            option1 ?
             <p onClick={()=>{setActive(optionsObject.option1)}} 
             className={active == optionsObject.option1 ? Styles.active : Styles.notActive}>{option1}</p> : ""
         }
         {
            option2 ? 
            <p onClick={()=>{setActive(optionsObject.option2)}} 
            className={active == optionsObject.option2 ? Styles.active : Styles.notActive}>{option2}</p> : ""
         }
         {
            option3 ? 
            <p onClick={()=>{setActive(optionsObject.option3)}} 
            className={active == optionsObject.option3 ? Styles.active : Styles.notActive}>{option3}</p> : ""
         }
         {
            option4 ? 
            <p onClick={()=>{setActive(optionsObject.option4)}} 
            className={active == optionsObject.option4 ? Styles.active : Styles.notActive}>{option4}</p> : ""
         }
         {
            option5 ? 
            <p onClick={()=>{setActive(optionsObject.option5)}} 
            className={active == optionsObject.option5 ? Styles.active : Styles.notActive}>{option5}</p> : ""
         }
        </div>
        <HorizontalRule color={"rgba(118, 118, 128, 0.12)"} marginTop={"-1rem"} marginBottom={"1rem"}></HorizontalRule>
      </>
     );
}
 
export default SelectorNav;