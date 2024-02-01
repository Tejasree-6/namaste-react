import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { stores } from "../utils/mockData";
import ShimmerUI from "./ShimmerUI";

 


const Body=()=>{
  const [dataList,setDataList]=useState(stores);
  let [apiData,setApiData]=useState([]);

   useEffect(()=>{
      fetchData();
   },[])

   const fetchData= async()=>{
      let data= await fetch("https://dummyjson.com/recipes");
     
      data=await data.json();
      setApiData(data?.recipes);
   }
   console.log(apiData);
  console.log(dataList);
  if(apiData.length===0){
    return <ShimmerUI/>
  }
    return (
      <div className='body'>
          <div className='filter'> 
          <button className="filter-btn" 
          onClick={()=>{
           let dataList1=apiData.filter((data)=>data?.rating>4.5);
            console.log(dataList1)
            setApiData(dataList1);
          }}
          >
            Top Rated Recipies
          </button>
          </div>
          <div className='res-container'>
           {apiData.map((resData)=>
           <ResCard key={resData.id} restaData={resData}
           
           />)}
          
  
          </div>
      </div>
    )
  }
  export default Body;