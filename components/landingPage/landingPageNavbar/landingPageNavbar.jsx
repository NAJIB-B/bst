import Styles from "./landingPageNavbar.module.css"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass , faCaretDown } from '@fortawesome/free-solid-svg-icons';

const LandingPageNavbar = () => {

 const links = [
    {
        name:"Home",
    },
    {
        name:"Data Migration",
        dropdown: true,
    },
    {
        name:"Free Resources",
        dropdown: true,
    },
    {
        name:"School Management",
    },
    {
        name:"Consulting",
    },
    {
        name:"Blog",
    },
  
 ]


    return ( 
        <div className={Styles.outer_container}>
            <div className={Styles.inner_container}>
                <div className={Styles.navbar}>
                    {links.map((link, i)=>{
                    return(

                    <div className={Styles.navbar_link} key={i}>
                        <Link href={"/"} className={Styles.navbar_link_link}>{link.name} </Link>
                        {link.dropdown &&
                        <FontAwesomeIcon 
                        icon={faCaretDown} 
                        size="xl" 
                        style={{color:"rgba(37, 37, 37, 1)"}} />
                     }
                    
                    </div>
                    )
                    })}
                    <div className={Styles.search_icon_div}>

                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{color:"rgba(212, 158, 12, 1)"}} />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LandingPageNavbar;