import { useEffect } from "react";

const User=(props)=>{
    const {name}=props;

      useEffect( ()=>{
        const timer=setInterval(()=>{
            console.log(" Timer FC")
        },1000)
        return()=>{
            clearInterval(timer)
        }
    },[])

    return (
        <div className="user-card">
            <u><h1>User profile</h1></u>
            <h2>Name: {name}</h2>
            <h2>Location: New Jersey</h2>
            <h2>Email: tejasree6633@gmail.com</h2>
        </div>
    )
}
export default User;