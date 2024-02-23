import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,

        }
    }
    render(){
        const {name}=this.props;
        return(
            <div className="user-card">
            <u><h1>User profile</h1></u>
            <h2>Name: {name}</h2>
            <h2>Location: New Jersey</h2>
            <h2>Email: tejasree6633@gmail.com</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Count</button>
            <h1>Count: {this.state.count}</h1>
            </div>
        )
    }
}
export default UserClass;