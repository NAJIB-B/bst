import {  FaFilter, FaSearch } from "react-icons/fa";
import {  MdArrowDropDown} from "react-icons/md";
import InputWithIcon from "@/components/inputWithIcon/inputWithIcon";
import Button from "@/components/button/button";
import Styles from "./filter.module.css"

const Filter = () => {
    return ( 
        <>
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
    <p className={Styles.first_text}>Showing 305 reports out of 1093</p>
    <p className={Styles.second_text}>0 Selected</p>
    </div>
    <div className={Styles.action_section_right}>
    <Button 
    fill={"rgba(118, 118, 128, 0.12)"} 
    color={"rgba(60, 60, 67, 0.6)"} 
    radius={"0.625rem"}
    width={"40%"}
    padding={"0.8rem"}
    border={"0"}>Archive</Button>
    </div>
</div>
        </>
     );
}
 
export default Filter;