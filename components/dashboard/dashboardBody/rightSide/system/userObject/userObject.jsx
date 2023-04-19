import Styles from "./userObject.module.css"

const UserObject = () => {
    const list = [1,2,3,4,5]
    return ( 
        <>
        <div className={Styles.header_object}>
            <span>ID</span>
            <span className={Styles.object_item}>Previous Role</span>
            <span className={Styles.object_item}>Status</span>
            <span className={Styles.object_item}>Current Role</span>
            <span className={Styles.object_item}>Date</span>
        </div>

        {list.map((item, index)=>{
  return(

    
    <div className={Styles.main_container}>
       <span >{index}</span>
       <span className={Styles.object_item}>content</span>
       <span className={Styles.object_item}>content</span>
       <span className={Styles.object_item}>content</span>
       <span className={Styles.object_item}>content</span>
       </div> 
   
  )
        })}

    
        </>
    );
}
 
export default UserObject;