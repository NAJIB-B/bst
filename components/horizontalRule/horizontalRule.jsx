import Styles from "./horizontalRule.module.css"

const HorizontalRule = (props) => {
    const {
        width,
        style,
        color,
        marginTop,
        marginBottom,
    } = props
    return ( 
        <hr className={Styles.horizontal_rule}
        style={{
            borderWidth: width ? width : '',
            borderStyle: style ? style : '',
            borderColor: color ? color : '',
            marginTop: marginTop ? marginTop :"",
            marginBottom: marginBottom ? marginBottom :"",
        }}></hr>
     );
}
 
export default HorizontalRule;