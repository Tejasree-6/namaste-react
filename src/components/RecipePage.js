import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RecipePage=()=>{
  
    const[apiData,setApiData]=useState([]);
    const {rId}=useParams();
   console.log(rId)
    useEffect(()=>{
        fetchData();
    },[])
   const fetchData=async()=>{
    let data=await fetch("https://dummyjson.com/recipes");
    data=await data.json();
    setApiData(data?.recipes)
   }
    return (
     
        <div>
            {console.log(apiData)}
            <h1>{apiData[rId-1]?.name}</h1>
            <h2>Ingredients:{apiData[rId-1]?.ingredients.join(",")}</h2>
            <h3>Instructions:{apiData[rId-1]?.instructions.join(" ")}</h3>
            <h2>Preparation Time:{apiData[rId-1]?.prepTimeMinutes} Minutes</h2>
            <h2>Cooking Time:{apiData[rId]-1?.cookTimeMinutes} Minutes</h2>
        </div>
    )
}
export default RecipePage;