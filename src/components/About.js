import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(){
        super()
        console.log("Parent Construcor")
    }
    componentDidMount(){
        console.log("Parent ComponentDidMount")
    }
    render(){
        console.log("Parent render")
        return(
            <div>
                <h1>About</h1>
                
                <User name={"Teja (Function)"}/>
                {/* <UserClass name={"First (Class)"}/> */}
           
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