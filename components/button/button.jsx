import Styles from "./button.module.css"
const Button = (props) => {
    const {
        label,
        color,
        fill,
        icon,
        border,
        radius,
        action,
        padding,
        height,
        width,
        disabled,
        gap,
        fontSize,
        fontWeight,
        btnStyle,
        marginTop,
        svg,
        logoGap,
        justifyLogoCenter,
    } = props
    return ( 
        <button
        className={`${Styles.default_button} ${btnStyle && btnStyle}`}
        style={{
          width: width ? width : '',
          pointerEvents: disabled ? 'none' : '',
          cursor: disabled ? 'not-allowed' : '',
          height: height ? height : 'fit-content',
          color: color ? color : 'white',
          backgroundColor: fill ? fill : '',
          padding: !padding ? '' : padding,
          opacity: disabled ? '0.2' : '',
          border: !border ? '' : border,
          borderRadius: !radius ? "" : radius, 
          fontWeight:  fontWeight ?  fontWeight : "",
          fontSize: fontSize ? fontSize : "",
          gap: gap && gap,
          transition: 'all 0.3s',
          marginTop: marginTop,
          
          ...props
        }}
        onClick={action}
        // className="btn button-black"
      >
        {icon && (
          <div className="icon">
            {' '}
            {svg ? icon : <Image src={icon} alt="buttonIcon" width="100%" height="100%" />}
          </div>
        )}
        <div className={Styles.btn_label} 
        style={{gap: logoGap ? logoGap : "",
        justifyContent: justifyLogoCenter ? "center" : "" }}>{label || props.children}</div>
      </button>
     );
}
 
export default Button;