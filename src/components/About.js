import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(){
        super()
       
    }
   
    render(){
       
        return(
            <div >
                {/* <h1 className="m-4 p-4">About</h1> */}
                
                {/* <User name={"Teja (Function)"}/> */}
                 
            <div>
                LoggedInUser: 
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
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