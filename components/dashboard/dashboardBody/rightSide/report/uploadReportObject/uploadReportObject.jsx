import Styles from "./uploadReportObject.module.css"

const UploadReportObject = () => {
    const list = [1,2,3,4,5]
    return ( 
        <>
        <div className={Styles.header_object}>
            <span>ID</span>
            <span className={Styles.object_item}>File Name</span>
            <span className={Styles.object_item}>Report Type</span>
            <span className={Styles.object_item}>Status</span>
            <span className={Styles.object_item}>Uploaded Date</span>
            <span className={Styles.object_item}>Total Records</span>
            <span className={`${Styles.object_item} ${Styles.view}`}>View</span>
        </div>

        {list.map((item, index)=>{
  return(

    
    <div className={Styles.main_container} key={index}>
       <span >{index}</span>
       <span className={Styles.object_item}>content</span>
       <span className={Styles.object_item}>content</span>
       <span className={Styles.object_item}>content</span>
       <span className={Styles.object_item}>content</span>
       <span className={Styles.object_item}>content</span>
       <span className={`${Styles.download_btn} ${Styles.object_item}`}>Download</span>
       </div> 
   
  )
        })}

    
        </>
    );
}
 
export default UploadReportObject;