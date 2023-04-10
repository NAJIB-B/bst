import Styles from "./landingPageNavbar.module.css"
import Link from "next/link";
import {  MdArrowDropDown} from "react-icons/md";
import {  FaSearch} from "react-icons/fa";

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
                        {link.dropdown && <MdArrowDropDown size={20}></MdArrowDropDown>}
                    
                    </div>
                    )
                    })}
                    <FaSearch size={25} color={"rgba(212, 158, 12, 1)"}></FaSearch>
                </div>
            </div>
        </div>
     );
}
 
export default LandingPageNavbar;