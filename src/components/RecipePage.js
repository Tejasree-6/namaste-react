import { useParams } from "react-router-dom";
import useRecipePage from "../utils/useRecipePage";
const RecipePage=()=>{
  const {rId}=useParams();
  const apiData=useRecipePage();
    return (
             <div>
            <h1>{apiData[rId-1]?.name}</h1>
            <h2>Ingredients:{apiData[rId-1]?.ingredients.join(",")}</h2>
            <h3>Instructions:{apiData[rId-1]?.instructions.join(" ")}</h3>
            <h2>Preparation Time:{apiData[rId-1]?.prepTimeMinutes} Minutes</h2>
            <h2>Cooking Time:{apiData[rId]-1?.cookTimeMinutes} Minutes</h2>
        </div>
    )
}
export default RecipePage;