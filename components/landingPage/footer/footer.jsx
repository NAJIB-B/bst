import Styles from "./footer.module.css";
import Image from "next/image";
import {  BsInstagram} from "react-icons/bs";
import {  FiFacebook,FiTwitter} from "react-icons/fi";
import {  TbBrandTelegram} from "react-icons/tb";
import Button from "@/components/button/button";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import Link from "next/link";

const Footer = () => {
    return ( 
        <div className={Styles.outer_container}>
            <div className={Styles.inner_container}>
                <div className={Styles.left_side}>
                    <div className={Styles.logo_div}>
                        <Image src={"./footerLogo.svg"} height={95} width={145}></Image>
                    </div>
                    <p>
                    urna. amet, felis, Donec id ullamcorper vitae Nam Donec tincidunt varius 
                    at Donec nibh laoreet id nibh lorem. non. commodo maximus facilisis 
                    Quisque ac at, itincidunt consectetur venenatis placerat venenatis faucibus est.
                    </p>
                    <p>
                    Nam ac risus porta libero, nisi dui. hendrerit sit 
                    hendrerit quam Nunc ex. In amet, lorem. ac 
                    </p>
                    <div className={Styles.contact_div}>
                        <div>
                            <Image src={"./customerCare.svg"} height={45} width={45}></Image>
                        </div>
                        <div>
                            <p  className={Styles.contact_div_text}>Need Help? Call Us Now</p>
                            <p className={Styles.contact_div_text}>+234 906 0004 381</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.right_side}>
                    <div className={Styles.top_section}>
                        <div>
                            <h3>Follow us</h3>
                            <div className={Styles.top_section_icons}>
                                <FiFacebook size={20}></FiFacebook>
                                <FiTwitter size={20}></FiTwitter>
                                <TbBrandTelegram size={20}></TbBrandTelegram>
                                <BsInstagram size={20}></BsInstagram>
                               
                            </div>
                        </div>
                        <div className={Styles.top_section_left_side}>
                            <h3>Subscribe</h3>
                            <p>Subscribe to stay tuned for new web design and latest updates. Let's do it! </p>
                            <input 
                            className={Styles.input}
                            type="text" 
                            placeholder="Enter your email Address"/>
                            <Button fill={"rgba(212, 158, 12, 1)"}
                            color={"rgba(10, 44, 78, 1)"}
                            padding={"0.6rem"}
                            radius={"0.3rem"}
                            border={"0"}
                            fontWeight={"500"}
                            width={"30%"}>Subscribe</Button>
                        </div>

                    </div>

                    <div className={Styles.bottom_section}>
                        <HorizontalRule color={"rgba(255, 255, 255, 1)"}></HorizontalRule>
                        <div className={Styles.links_main_div}>
                            <div className={Styles.link_div}>
                                <h4 className={Styles.link_div_header}>Product</h4>
                                <Link href={"/"} className={Styles.link}>Landing Page</Link>
                                <Link href={"/"} className={Styles.link}>Popup Builder</Link>
                                <Link href={"/"} className={Styles.link}>Web-design</Link>
                                <Link href={"/"} className={Styles.link}>Web-designers</Link>
                                
                            </div>
                            <div className={Styles.link_div}>
                                <h4 className={Styles.link_div_header}>Product</h4>
                                <Link href={"/"} className={Styles.link}>Landing Page</Link>
                                <Link href={"/"} className={Styles.link}>Popup Builder</Link>
                                <Link href={"/"} className={Styles.link}>Web-design</Link>
                                <Link href={"/"} className={Styles.link}>Web-designers</Link>
                                <Link href={"/"} className={Styles.link}>Web-designers</Link>
                                
                            </div>
                            <div className={Styles.link_div}>
                                <h4 className={Styles.link_div_header}>Product</h4>
                                <Link href={"/"} className={Styles.link}>Landing Page</Link>
                                <Link href={"/"} className={Styles.link}>Popup Builder</Link>
                                <Link href={"/"} className={Styles.link}>Web-design</Link>
                                <Link href={"/"} className={Styles.link}>Web-designers</Link>
                                
                            </div>
                            <div className={Styles.link_div}>
                                <h4 className={Styles.link_div_header}>Company</h4>
                                <Link href={"/"} className={Styles.link}>About Us</Link>
                                <Link href={"/"} className={Styles.link}>Careers</Link>
                                <Link href={"/"} className={Styles.link}>FAQ</Link>
                                <Link href={"/"} className={Styles.link}>Teams</Link>
                                <Link href={"/"} className={Styles.link}>Contact</Link>
                                
                            </div>
                            

                        </div>
                    </div>

                </div>

            </div>
        </div>
     );
}
 
export default Footer;