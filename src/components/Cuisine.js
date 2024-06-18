const Cuisine=({recipe})=>{
//   console.log(recipe)
    return(
        <div className="">
           <h1>name: {recipe?.cuisine}</h1>
            <img src={recipe.image} width={100} height={100}/>
        </div>
    )
}
export default Cuisine;