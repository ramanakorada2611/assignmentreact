import React,{ useState } from "react"

 export let Function=()=>{
    let [variable,setFunction]=useState(true)
    return(
        <>  
    {
     variable?
     <div className="box">
     <h1>This is Created Using  Functional Component</h1>
     <br></br>
     <h3>This is Done Using External CSS</h3>
     <h3>This is Done Using Internal CSS</h3>
     </div>
     :null
    }
   {/* <button className="btn2" onClick={()=>{setShow(true)}}>To See Styling in Class Component</button>
   <button className="btn1" onClick={()=>{setShow(false)}}>To See Styling in Class Component</button> */}
    {/* <button className="btn1" onClick={()=>{setFunction(!variable)}}>{variable?'hide':'show'}</button>  */}
    <button className="btn1" onClick={()=>{setFunction(!variable)}}>To See Styling in Functional Component</button> 
       </>
    )
 }
