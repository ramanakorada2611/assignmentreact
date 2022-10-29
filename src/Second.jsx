import React,{ Component } from "react"

export  default class Change extends Component{
    state={
        counter:true
    }
    render(){
        let Function=()=>{
            this.setState({counter:!this.state.counter})
        }
        let x=this.state.counter
        return(
            <> 
            {
             x &&( <div className="box1">
            <h1>This is Created Using  Class Component</h1><br></br>
            <h3>This is Done Using External CSS</h3>
            <h3>This is Done Using Internal CSS</h3>
            </div> )
            } 
              {/* <button className="btn2" onClick={Function}>{x?'hide':'show'}</button> */}
            <button className="btn2" onClick={Function}>To See Styling in Class Component</button>
            
            </> 
        )
    }
}

