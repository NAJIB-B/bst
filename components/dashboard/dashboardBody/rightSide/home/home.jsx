import Styles from "./home.module.css"
import SelectorNav from "../../selectorNav/selectorNav";
import { useState } from "react";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import Button from "@/components/button/button";
import {  MdArrowDropDown} from "react-icons/md";


const navOptions ={
    option1: "option1",
    option2: "option2",
    none: "none"
}

const Home = () => {
   
    const [active, setActive] = useState(navOptions.option1)
    

    return ( 
          <>
          
          <SelectorNav
          setActive={setActive}
          active={active}
          optionsObject={navOptions}
          option1={"Ingestions"}
          option2={"Reports"}></SelectorNav>
          
          <div className={Styles.top_section}>
            <div className={Styles.top_section_left}>
                <p>Data Ingestion Summary</p>
            </div>
            <div className={Styles.top_section_right}>
                <div className={Styles.inner}>

                <div className={Styles.button_type}>
                    <div className={Styles.left}>
                      <p className={Styles.right_top_text}>Timeline</p>
                      <p className={Styles.right_bottom_text}>07 March</p>
                    </div>
                    <div>
                       <MdArrowDropDown size={25}></MdArrowDropDown>
                    </div>
                </div>
                <Button 
                fill={"rgba(10, 44, 78, 1)"} 
                color={"white"} 
                marginTop={"0.5rem"}
                radius={"0.625rem"}
                width={"25%"}
                border={"0"}
                padding={"0.8rem"}>Go to Data</Button>
                <Button 
                fill={"rgba(39, 174, 96, 1)"} 
                color={"white"} 
                marginTop={"0.5rem"}
                radius={"0.625rem"}
                width={"30%"}
                border={"0"}
                padding={"0.8rem"}>Ingest Data +</Button>
                </div>
            </div>
          </div>
          </>
    
     );
}
 
export default Home;