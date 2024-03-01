import { useParams } from "react-router-dom";
import useRecipePage from "../utils/useRecipePage";
import CuisineCategory from "./CuisineCategory";

const RecipePage=()=>{
  const {rId}=useParams();
  const apiData=useRecipePage();
  const cuisineData=apiData.filter(data=> data?.cuisine==="Indian" || data?.cuisine==="Italian")
 
    return (
             <div className=" font-bold">
            <h1 className=" text-2xl">{apiData[rId-1]?.name}</h1>
            <h2>Ingredients:{apiData[rId-1]?.ingredients.join(",")}</h2>
            <h3>Instructions:{apiData[rId-1]?.instructions.join(" ")}</h3>
            <h2>Preparation Time:{apiData[rId-1]?.prepTimeMinutes} Minutes</h2>
            <h2>Cooking Time:{apiData[rId]-1?.cookTimeMinutes} Minutes</h2>
            
            {cuisineData.map((resData)=>(        
                <div key={resData.id} className=" text-center"> <CuisineCategory resData={resData}/></div>
            ))}
  
            
        </div>
    )
}
export default RecipePage;