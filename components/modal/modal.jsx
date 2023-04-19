import Styles from "./modal.module.css"

const Modal = (props) => {
    const {zIndex, width, fixed, fixedHeight} = props
    return ( 
        <div className={Styles.modal_div}
        style={{
            zIndex: zIndex ? zIndex : "",
            width: width ? width : "",
            position: fixed ? "fixed" : "",
            height : fixedHeight ? fixedHeight : ""
        }}>
            {props.children}
        </div>
     );
}
 
export default Modal;