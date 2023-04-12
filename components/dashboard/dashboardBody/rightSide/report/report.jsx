import { useState } from "react";
import SelectorNav from "../../selectorNav/selectorNav";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import Styles from "./report.module.css"
import {  FaFilter, FaSearch } from "react-icons/fa";
import {  MdArrowDropDown} from "react-icons/md";
import InputWithIcon from "@/components/inputWithIcon/inputWithIcon";
import Button from "@/components/button/button";
import Filter from "../../filter/filter";

const navOptions ={
    option1: "option1",
    option2: "option2",
    option3: "option3",
    option4: "option4",
    none: "none"
}


const Report = () => {
    const [active, setActive] = useState(navOptions.option1)
    return ( 
        <>
           <SelectorNav
            setActive={setActive}
            active={active}
            optionsObject={navOptions}
            option1={"All"}
            option2={"Successful Reports"}
            option3={"Failed Reports"}
            option4={"Archived Reports"}></SelectorNav>
            
           <Filter></Filter>
        </>
     );
}
 
export default Report;