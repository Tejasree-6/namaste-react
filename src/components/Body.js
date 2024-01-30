import { useState } from "react";
import ResCard from "./ResCard";
import { stores } from "../utils/mockData";

 


const Body=()=>{
  const [dataList,setDataList]=useState(stores);
  console.log(dataList)
    return (
      <div className='body'>
          <div className='filter'> 
          <button className="filter-btn" 
          onClick={()=>{
           let dataList1=dataList.filter((data)=>data?.rating?.text>4.5);
            console.log(dataList1)
            setDataList(dataList1);
          }}
          >
            Top Rated Restaurants
          </button>
          </div>
          <div className='res-container'>
           {dataList.map((resData)=>
           <ResCard key={resData.storeUuid} restaData={resData}
           
           />)}
          
  
          </div>
      </div>
    )
  }
  export default Body;