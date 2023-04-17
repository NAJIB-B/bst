import {  FaFilter, FaSearch } from "react-icons/fa";
import {  FiUpload } from "react-icons/fi";
import {  MdArrowDropDown} from "react-icons/md";
import InputWithIcon from "@/components/inputWithIcon/inputWithIcon";
import Button from "@/components/button/button";
import Styles from "./filter.module.css"
import { filterTypes } from "@/utils/dashboard";

const Filter = ({type}) => {
    return ( 
        <>
        {type == filterTypes.viewReport ?
        <>
        
         <div className={Styles.top_section}>

<div className={Styles.filter_btn}>
    <FaFilter size={22}></FaFilter>
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
    <span>Actions</span>
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
     
        </>:""}
        {type == filterTypes.uploadReport ? 
        <>
            <div className={Styles.top_section}>

<div className={Styles.choose_file_btn}>
    
    <span>Choose File</span>
    <MdArrowDropDown size={25}></MdArrowDropDown>
</div>
<div className={Styles.upload_search_input}>


<InputWithIcon 
type={"text"}
placeholder={"Search Reports"}
backgroundColor={"rgba(250, 250, 250, 1)"}
borderColor={"rgba(118, 118, 128, 0.12)"}
> <FaSearch size={20}></FaSearch></InputWithIcon>
</div>
<div className={Styles.upload_btn}>
<Button 
    fill={"rgba(39, 174, 96, 1)"} 
    color={"rgba(255, 255, 255, 1)"} 
    radius={"0.625rem"}
    width={"100%"}
    padding={"0.8rem"}
    border={"0"}>Upload <FiUpload></FiUpload></Button>
</div>
</div>
<div className={Styles.action_section}>
   
    <div className={Styles.action_section_left}>
    <Button 
    fill={"rgba(118, 118, 128, 0.12)"} 
    color={"rgba(60, 60, 67, 0.6)"} 
    radius={"0.625rem"}
    width={"10%"}
    padding={"0.8rem"}
    border={"0"}>Archive</Button>
    </div>
</div>
        </>:""}
        </>
     );
}
 
export default Filter;