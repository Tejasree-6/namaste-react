import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div>
            <h1>About</h1>
            
            {/* <User name={"Teja (Function)"}/> */}
            <UserClass name={"Teja (Class)"}/>
        </div>
    )
}
export default About;