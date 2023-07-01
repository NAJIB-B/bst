import LoadingIcons from 'react-loading-icons'


import Styles from "./loading.module.css"

const Loading = () => {
    return ( 
 


            <div className={Styles.spinner_div}>
                <LoadingIcons.Bars fill="#d49e0c"></LoadingIcons.Bars>
                
            </div>
    
           
        
     );
}
 
export default Loading;