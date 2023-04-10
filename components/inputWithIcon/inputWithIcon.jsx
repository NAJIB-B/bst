import Styles from "./inputWithIcon.module.css"

const InputWithIcon = (props) => {
    const {type, placeholder, changeFunction, marginTop, marginBottom} = props
    return ( 
        <div className={Styles.main_container}
        style={{
            marginTop: marginTop ? marginTop : "",
            marginBottom: marginBottom ? marginBottom: ""
        }}>
            <div className={Styles.icon}>
            {props.children} 
            </div>
         <input 
         className={Styles.input}
         type={type} 
         placeholder={placeholder}
         onChange={changeFunction}></input>
        </div>
     );
}
 
export default InputWithIcon;