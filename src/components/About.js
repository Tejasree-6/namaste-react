import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(){
        super()
       
    }
   
    render(){
       
        return(
            <div >
                {/* <h1 className="m-4 p-4">About</h1> */}
                
                {/* <User name={"Teja (Function)"}/> */}
                <UserClass name={"First (Class)"}/>
           
            </div>
        )
    }
}

// const About=()=>{
//     return(
//         <div>
//             <h1>About</h1>
            
//             {/* <User name={"Teja (Function)"}/> */}
//             <UserClass name={"Teja (Class)"}/>
//         </div>
//     )
// }
export default About;