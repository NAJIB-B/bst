import { useState } from "react";
import SelectorNav from "../../selectorNav/selectorNav";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import Styles from "./data.module.css"
import {  FaFilter, FaSearch } from "react-icons/fa";
import {  MdArrowDropDown} from "react-icons/md";
import InputWithIcon from "@/components/inputWithIcon/inputWithIcon";
import Button from "@/components/button/button";

const navOptions ={
    option1: "option1",
    option2: "option2",
    option3: "option3",
    option4: "option4",
    none: "none"
}

const Data = () => {

    const [active, setActive] = useState(navOptions.option1)

    return ( 
        <>
             <SelectorNav
            setActive={setActive}
            active={active}
            optionsObject={navOptions}
            option1={"All"}
            option2={"Succeded"}
            option3={"Failed"}
            option4={"Archived"}></SelectorNav>
            
            <HorizontalRule color={"rgba(118, 118, 128, 0.12)"} marginTop={"-1rem"}></HorizontalRule>

            <div className={Styles.top_section}>

            <div className={Styles.filter_btn}>
                <FaFilter size={25}></FaFilter>
                <span>Filter</span>
                <MdArrowDropDown size={25}></MdArrowDropDown>
            </div>
            <div className={Styles.search_input}>


            <InputWithIcon 
            type={"text"}
            placeholder={"Search Reports"}
            backgroundColor={"rgba(250, 250, 250, 1)"}
            borderColor={"rgba(118, 118, 128, 0.12)"}
            > <FaSearch size={20}></FaSearch></InputWithIcon>
            </div>
            </div>
            <div className={Styles.action_section}>
                <div className={Styles.action_section_left}>
                <input type="checkbox" />
                <div className={Styles.filter_btn}>
                <span>Filter</span>
                <MdArrowDropDown size={25}></MdArrowDropDown>
                </div>
                <p className={Styles.p}>Showing 305 reports out of 1093</p>
                <p className={Styles.p}>0 Selected</p>
                </div>
                <div>
                <Button 
                fill={"rgba(118, 118, 128, 0.12)"} 
                color={"rgba(60, 60, 67, 0.6)"} 
                radius={"0.625rem"}
                width={"100%"}
                padding={"0.8rem"}>Archive</Button>
                </div>
            </div>
        </>
     );
}
 
export default Data;