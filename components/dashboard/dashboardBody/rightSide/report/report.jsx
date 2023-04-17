import { useState } from "react";
import SelectorNav from "../../selectorNav/selectorNav";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import Styles from "./report.module.css"
import Button from "@/components/button/button";
import { useSelector } from "react-redux";
import Filter from "../../filter/filter";
import ReportObject from "./reportObject/reportObject";
import { reportOptions } from "@/utils/dashboard";
import { filterTypes } from "@/utils/dashboard";
import UploadReportObject from "./uploadReportObject/uploadReportObject";
import ArchiveReportObject from "./archiveReportObject/archiveReportObject";


const viewReportNavOptions ={
    option1: "All",
    option2: "Successful Reports",
    option3: "Failed Reports",
    option4: "Archived Reports",
    none: "none"
}
const uploadReportDataNavOptions ={
    option1: "Upload Report",
    option2: "View Archived Reports",
    none: "none"
}


const Report = () => {
    const {selectedReportOption} = useSelector((state)=> state.dashboardMenuOption)

    const [activeViewReport, setActiveViewReport] = useState(viewReportNavOptions.option1)
    const [activeUploadReport, setActiveactiveUploadReport] = useState(uploadReportDataNavOptions.option1)
    return ( 
        <>
        {selectedReportOption == reportOptions.viewReports?
        <>
        
           <SelectorNav
            setActive={setActiveViewReport}
            active={activeViewReport}
            optionsObject={viewReportNavOptions}
            option1={"All"}
            option2={"Successful Reports"}
            option3={"Failed Reports"}
            option4={"Archived Reports"}></SelectorNav>
            
           <Filter type={filterTypes.viewReport}></Filter>
           

<HorizontalRule 
color={"rgba(118, 118, 128, 0.12)"} 
marginTop={"1rem"}
marginBottom={"0.8rem"}></HorizontalRule>

           <div className={Styles.reports_container}>

           <ReportObject></ReportObject>
           <ReportObject></ReportObject>
           <ReportObject></ReportObject>
           <ReportObject></ReportObject>
           <ReportObject></ReportObject>
           <ReportObject></ReportObject>
           </div>
        </>:<>
        <SelectorNav
            setActive={setActiveactiveUploadReport}
            active={activeUploadReport}
            optionsObject={uploadReportDataNavOptions}
            option1={"Upload Report"}
            option2={"View Archived Reports"}
         ></SelectorNav>
            
           <Filter type={filterTypes.uploadReport}></Filter>

         {activeUploadReport == uploadReportDataNavOptions.option1?
         
           <div className={Styles.reports_container}>

           
           <UploadReportObject></UploadReportObject>

           </div>
         :""}
         {activeUploadReport == uploadReportDataNavOptions.option2?
         
           <div className={Styles.reports_container}>

           
           <ArchiveReportObject></ArchiveReportObject>
           <ArchiveReportObject></ArchiveReportObject>
           <ArchiveReportObject></ArchiveReportObject>
           <ArchiveReportObject></ArchiveReportObject>
           <ArchiveReportObject></ArchiveReportObject>
           <ArchiveReportObject></ArchiveReportObject>

           </div>
         :""}
        </>}
        </>
     );
}
 
export default Report;