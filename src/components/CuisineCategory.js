import { useState } from "react";
import Cuisine from "./Cuisine";

const CuisineCategory=(resData)=>{
    console.log(resData)
    const [showAccordian,setShowAccordian]=useState(false);
    const handleClick=()=>{
      setShowAccordian(!showAccordian);
    }
    return(
        <div className="w-6/12  bg-gray-100 m-auto  p-4 my-4 shadow-md">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span>{resData?.resData?.cuisine} </span>
            <span>🔽</span>
           </div>
          {showAccordian && <Cuisine recipe={resData}/> }
        </div>
    )
}
export default CuisineCategory;