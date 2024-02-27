import React from "react";
class UserClass extends React.Component{
    constructor(props){
       
        super(props);
        console.log(this.props.name+"Child Constructor")
        this.state={
            count:0,
            userInfo:{
                name:"",
                avatar_url:"",
            }
        }
    }
    async componentDidMount(){
        console.log(this.props.name+"Child ComponentDidMount")
        const data=await fetch("https://api.github.com/users/Tejasree-6");
        const json=await data.json();
       this.setState({
        userInfo:json
       })
    }
    render(){
        console.log(this.props.name+"Child render")
        const {name,avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
            <u><h1>User profile</h1></u>
            <img className="user-profile" src={avatar_url}/>
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