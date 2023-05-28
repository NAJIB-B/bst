import {  FaFilter, FaSearch } from "react-icons/fa";
import {  FiUpload } from "react-icons/fi";
import {  MdArrowDropDown, } from "react-icons/md";
import { AiFillCaretRight} from "react-icons/ai";
import InputWithIcon from "@/components/inputWithIcon/inputWithIcon";
import Button from "@/components/button/button";
import Styles from "./filter.module.css"
import { filterTypes } from "@/utils/dashboard";
import { useState } from "react";


const Filter = ({type}) => {

  const [filterDropdown, setFilterDropdown] = useState(false) //dropdown for filter button
  const [dataTypeDropdown, setDataTypeDropdown] = useState(false) //dropdown for option data type in filter dropdown
  const [actionDropdown, setActionDropdown] = useState(false) // dropdown for action button
  const [exportDropdown, setExportDropdown] = useState(false) // dropdown for export option in action dropdown


  const toogleFilterDropdown =()=>{

    setFilterDropdown(!filterDropdown)
  }
  const toogleActionDropdown =()=>{

    setActionDropdown(!actionDropdown)
  }

  const filterDropdownOptions =[
    {
        name:"Data Type",
        dropdown: true,
        openDropdown: ()=>{setDataTypeDropdown(true)},
        closeDropdown: ()=>{setDataTypeDropdown(false)},
        toogleDropdown: ()=>{setDataTypeDropdown(!dataTypeDropdown)},
        isDropdownOpen: dataTypeDropdown,  // use this to check if dropdown is open or close 
        dropdownItems:[
            {
                name:"Account",
            },
            {
                name:"Adjustment",
            },
            {
                name:"Loan",
            },
            {
                name:"Loan Overdraft",
            }
        ]
    },
    {
        name:"Date",
        dropdown: false
    },
    {
        name:"Created By",
        dropdown: false
    },
    {
        name:"Created Date",
        dropdown: false
    }
   
]

  const actionDropdownOptions =[
    {
        name:"Export",
        dropdown: true,
        openDropdown: ()=>{setExportDropdown(true)},
        closeDropdown: ()=>{setExportDropdown(false)},
        toogleDropdown: ()=>{setExportDropdown(!exportDropdown)},
        isDropdownOpen: exportDropdown,  // use this to check if dropdown is open or close 
        dropdownItems:[
            {
                name:"As Email",
            },
            {
                name:"As CSV",
            },
            {
                name:"As PNG",
            },
            {
                name:"As PDF",
            }
        ]
    },
    {
        name:"Content",
        dropdown: false
    },
    {
        name:"Content",
        dropdown: false
    },
    {
        name:"Content",
        dropdown: false
    }
   
]


    return ( 
        <>

    {/* for view report */}

        {type == filterTypes.viewReport ?
        <>
        
         <div className={Styles.top_section}>
<div className={Styles.filter_btn_div}>
    
<div className={Styles.filter_btn} onClick={toogleFilterDropdown}>
    <FaFilter size={20}></FaFilter>
    <span className={Styles.filter_text}>Filter</span>
    <MdArrowDropDown size={25}></MdArrowDropDown>
</div>

{/* dropdown for the filter button */}
{filterDropdown ? 
    <>
    
    <div className={Styles.filter_dropdown}>
        
        {/* loop through all the option in the filter dropdown */}
          
        {filterDropdownOptions.map((item, key)=>{
            return(
              <>
              {/* check if the item has it's own dropdown */}
              {item.dropdown ? 


            //   for item with dropdown 
              <>
                <span key={key}
                 onClick={item.toogleDropdown}
                 className={Styles.filter_dropdown_item}>
                    {item.name} <AiFillCaretRight></AiFillCaretRight>

                     {/* check if dropdown is open or close  */}
                {item.isDropdownOpen ? <>
                
                <div 
                onMouseLeave={item.closeDropdown}
                className={Styles.export_dropdown}>
                  {item.dropdownItems.map((item , key)=>{
                    return(
                    
                        
                        <span key={key} className={Styles.filter_dropdown_item}>{item.name}</span>
                        
                        )
                    })}
                </div>
                </> : ""}
                </span>
              </>:


            //   for item without dropdown
            <>
            <span key={key} className={Styles.filter_dropdown_item}>{item.name}</span>
              
              </>
              
              }
              </>
            )
        })}

       
    </div>
    </>:""}
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


    <div className={Styles.filter_btn_div}>
    <div className={Styles.filter_btn} onClick={toogleActionDropdown}>
    <span className={Styles.filter_text}>Actions</span>
    <MdArrowDropDown size={25}></MdArrowDropDown>
    </div>

    {/* dropdown for action button */}
    {actionDropdown ? 
    <>
    
    <div className={Styles.filter_dropdown}>
        
        {/* loop through all the option in the filter dropdown */}
          
        {actionDropdownOptions.map((item, key)=>{
            return(
              <>
              {/* check if the item has it's own dropdown */}
              {item.dropdown ? 


            //   for item with dropdown 
              <>
                <span key={key}
                 onClick={item.toogleDropdown}
                 className={Styles.filter_dropdown_item}>
                    {item.name} <AiFillCaretRight></AiFillCaretRight>

                     {/* check if dropdown is open or close  */}
                {item.isDropdownOpen ? <>
                
                <div 
                onMouseLeave={item.closeDropdown}
                className={Styles.data_type_dropdown}>
                  {item.dropdownItems.map((item , key)=>{
                    return(
                    
                        
                        <span key={key} className={Styles.filter_dropdown_item}>{item.name}</span>
                        
                        )
                    })}
                </div>
                </> : ""}
                </span>
              </>:


            //   for item without dropdown
            <>
            <span key={key} className={Styles.filter_dropdown_item}>{item.name}</span>
              
              </>
              
              }
              </>
            )
        })}

       
    </div>
    </>:""}
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

   {/* for upload report */}

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
    border={"0"}>Upload <FiUpload size={18}></FiUpload></Button>
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