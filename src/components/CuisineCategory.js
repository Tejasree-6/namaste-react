import { useState } from "react";
import Cuisine from "./Cuisine";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CuisineCategory=({resData,showItems,setShowIndex})=>{
  
   
    const handleClick=()=>{
    //   setShowAccordian(!showAccordian);
    setShowIndex();
    }
    const dispatch=useDispatch();

    const handleAddItems=(name)=>{
        // dispatch an action using useDispatch hook 
        dispatch(addItem(name));
    }
    // console.log(resData);
    return(
        <div className="w-6/12  bg-gray-100 m-auto  p-4 my-4 shadow-md">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span>{resData?.name} </span>
            <button onClick={()=>handleAddItems(resData)}>Add</button>
            <span>🔽</span>
           </div>
          {showItems && <Cuisine recipe={resData}/> }
        </div>

        
    )
}
export default CuisineCategory;