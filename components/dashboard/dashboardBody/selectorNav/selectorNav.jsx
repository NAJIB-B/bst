import Styles from "./selectorNav.module.css"


const SelectorNav = (props) => {
    const {option1, option2, option3, option4, option5, active, setActive, optionsObject} = props

    

    return ( 
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
     );
}
 
export default SelectorNav;