import Styles from "./modal.module.css"

const Modal = (props) => {
    const {zIndex, width} = props
    return ( 
        <div className={Styles.modal_div}
        style={{
            zIndex: zIndex ? zIndex : "",
            width: width ? width : "",
        }}>
            {props.children}
        </div>
     );
}
 
export default Modal;