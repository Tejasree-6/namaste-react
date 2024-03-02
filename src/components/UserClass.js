import React from "react";
class UserClass extends React.Component{
    constructor(props){
       
        super(props);
       
        this.state={
            count:0,
            userInfo:{
                name:"",
                avatar_url:"",
            }
        }
    }

  
    async componentDidMount(){
       this.timer= setInterval(()=>{
          
        },1000);
      
        const data=await fetch("https://api.github.com/users/Tejasree-6");
        const json=await data.json();
       this.setState({
        userInfo:json
       })
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        
        const {name,avatar_url}=this.state.userInfo;
        return(
            <div className="p-4 m-4">
            <u><h1 className="mb-4 font-bold text-2xl">User profile</h1></u>
            <img className="w-40 h-40 border-solid rounded-full mb-4" src={avatar_url}/>
            <h2 className="text-lg font-semibold">Name: {name}</h2>
            <h2 className="text-lg font-semibold">Location: New Jersey</h2>
            <h2 className="text-lg font-semibold">Email: tejasree6633@gmail.com</h2>
            
            </div>
        )
    }
}
export default UserClass;