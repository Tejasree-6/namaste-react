import { useState } from "react";
import Cuisine from "./Cuisine";

const CuisineCategory=({resData,showItems,setShowIndex})=>{
  
   
    const handleClick=()=>{
    //   setShowAccordian(!showAccordian);
    setShowIndex();
    }
    return(
        <div className="w-6/12  bg-gray-100 m-auto  p-4 my-4 shadow-md">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span>{resData?.cuisine} </span>
            <span>🔽</span>
           </div>
          {showItems && <Cuisine recipe={resData}/> }
        </div>
    )
}
export default CuisineCategory;