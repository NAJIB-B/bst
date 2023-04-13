import Styles from "./home.module.css"
import SelectorNav from "../../selectorNav/selectorNav";
import { useState } from "react";
import HorizontalRule from "@/components/horizontalRule/horizontalRule";
import Button from "@/components/button/button";
import {  MdArrowDropDown} from "react-icons/md";
import BarChart from "./barChart/barChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";



const navOptions ={
    option1: "option1",
    option2: "option2",
    none: "none"
}
Chart.register(CategoryScale);
const Home = () => {
   
    const [active, setActive] = useState(navOptions.option1)
    const [chartData, setChartData] = useState({
        labels: ["Python", "Flutter", "Javascript", "Rust"], 
        datasets: [
          {
            label: "Users Gained ",
            data: [5, 2, 9, 1  ],
            backgroundColor: [
              "rgba(75,192,192,1)",
            ],
            borderColor: "black",
            borderWidth: 0,
            barThickness: 6,
            grouped:false,
          }
        ]
    })
    

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
                padding={"12px 16px"}>Go to Data</Button>
                <Button 
                fill={"rgba(39, 174, 96, 1)"} 
                color={"white"} 
                marginTop={"0.5rem"}
                radius={"0.625rem"}
                width={"30%"}
                border={"0"}
                padding={"12px 24px"}>Ingest Data +</Button>
                </div>
            </div>
          </div>
          {/* <div className={Styles.chart_div}>

          <BarChart chartData={chartData}></BarChart>
          </div> */}
          </>
    
     );
}
 
export default Home;