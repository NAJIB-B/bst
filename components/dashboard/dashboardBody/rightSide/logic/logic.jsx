import Styles from "./logic.module.css"
import {  MdArrowDropDown} from "react-icons/md";

const Logic = () => {
    const code = `
    @import  url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
    h1 {
      text-align: center;
    }
    body {
      background-color: #D2691E;
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-weight:400;
    }
    .white-box {
      background-color: #FFFFFF;
      color: #D2691E;
      margin: 40px 18%;
      padding: 5% 5% 5% 10%;
      font-family: 'Montserrat', sans-serif;
      font-weight:300;
    }
    
    .random-quote { 
      font-size: 1.5em;
      text-align: center;
      font-weight: 500;
    }
    .random-author {
      font-size: 1.2em;
      text-align: right;
    }
    .button {
      background-color: #D2691E;
      color: #FFFFFF;
      border: none;
      float: left;
      margin: 15px 5px auto auto;
      padding: 5px 10px 5px 10px;
    }
    .button {
      opacity: 1;
    }
    .button:hover {
      opacity: 0.75;
    }
    .new-quote-button {
      float: right;
    }
    
`
    return ( 
        <>
        <div className={Styles.switch_button}>
            <div className={Styles.left}>
                <span className={Styles.top}>Report Type</span>
                <span className={Styles.bottom}>MBR-530-02</span>
            </div>
            <div>
                <MdArrowDropDown size={30}></MdArrowDropDown>
            </div>
        </div>

        <div className={Styles.code_title_div}>
            <p className={Styles.active}>pre_row_wweights.py</p>
            <p>pre_row_wweights.py</p>
        </div>
        <div className={Styles.code_div}>
            <pre>
                {`
                @import  url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
                h1 {
                  text-align: center;
                }
                body {
                  background-color: #D2691E;
                  color: white;
                  font-family: 'Montserrat', sans-serif;
                  font-weight:400;
                }
                .white-box {
                  background-color: #FFFFFF;
                  color: #D2691E;
                  margin: 40px 18%;
                  padding: 5% 5% 5% 10%;
                  font-family: 'Montserrat', sans-serif;
                  font-weight:300;
                }
                
                .random-quote { 
                  font-size: 1.5em;
                  text-align: center;
                  font-weight: 500;
                }
                .random-author {
                  font-size: 1.2em;
                  text-align: right;
                }
                .button {
                  background-color: #D2691E;
                  color: #FFFFFF;
                  border: none;
                  float: left;
                  margin: 15px 5px auto auto;
                  padding: 5px 10px 5px 10px;
                }
                .button {
                  opacity: 1;
                }
                .button:hover {
                  opacity: 0.75;
                }
                .new-quote-button {
                  float: right;
                }
                
                `}
            </pre>
        </div>
        </>
     );
}
 
export default Logic;

