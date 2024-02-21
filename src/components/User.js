const User=(props)=>{
    const {name}=props;
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