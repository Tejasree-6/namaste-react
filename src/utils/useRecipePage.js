import { useEffect, useState } from "react";
import { RECIPES_URL } from "./constants";

const useRecipePage=()=>{
    const [apiData,setApiData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
            let data=await fetch(RECIPES_URL);
            data=await data.json();
          
            setApiData(data?.recipes)
           }
   
    return apiData;
}
export default useRecipePage;