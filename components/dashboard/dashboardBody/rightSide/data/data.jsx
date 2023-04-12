import { useState } from "react";
import SelectorNav from "../../selectorNav/selectorNav";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import Styles from "./data.module.css"
import Filter from "../../filter/filter";
import DataObject from "./dataObject/dataObject";

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
            

           <Filter></Filter>
           <HorizontalRule 
            color={"rgba(118, 118, 128, 0.12)"} 
            marginTop={"1rem"}
            marginBottom={"0.8rem"}></HorizontalRule>

           <div className={Styles.data_container}>
            <DataObject></DataObject>
            <DataObject></DataObject>
            <DataObject></DataObject>
            <DataObject></DataObject>
            <DataObject></DataObject>
            <DataObject></DataObject>

          </div>
        </>
     );
}
 
export default Data;