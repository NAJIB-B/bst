import Styles from "./inputWithIcon.module.css"

const InputWithIcon = (props) => {
    const {type, placeholder, changeFunction, marginTop, marginBottom, backgroundColor, borderColor} = props
    return ( 
        <div className={Styles.main_container}
        style={{
            marginTop: marginTop ? marginTop : "",
            marginBottom: marginBottom ? marginBottom: "",
           
        }}>
            <div className={Styles.icon}>
            {props.children} 
            </div>
         <input 
         className={Styles.input}
         type={type} 
         placeholder={placeholder}
         onChange={changeFunction}
         style={{ 
            backgroundColor: backgroundColor ? backgroundColor: "",
            borderColor: borderColor ? borderColor: ""
         }}></input>
        </div>
     );
}
 
export default InputWithIcon;