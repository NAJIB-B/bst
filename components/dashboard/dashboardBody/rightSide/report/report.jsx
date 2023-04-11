import { useState } from "react";
import SelectorNav from "../../selectorNav/selectorNav";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";

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
            
            <HorizontalRule color={"rgba(118, 118, 128, 0.12)"} marginTop={"-1rem"}></HorizontalRule>
        </>
     );
}
 
export default Report;