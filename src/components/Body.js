import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { stores } from "../utils/mockData";
import ShimmerUI from "./ShimmerUI";

import { Link } from "react-router-dom";

 import useOnlineStatus from "../utils/useOnlineStatus";


const Body=()=>{
 
  let [apiData,setApiData]=useState([]);
  let [filteredData,setFilteredData]=useState([]);
  const [searchText, setSearchText]=useState("");

   useEffect(()=>{
      fetchData();
   },[])
  
   const fetchData= async()=>{
      let data= await fetch("https://dummyjson.com/recipes");
     
      data=await data.json();
      setApiData(data?.recipes);
      setFilteredData(data?.recipes);
   }
  // console.log("api data from use effect",apiData)
  console.log("Body rendered")
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false) return <h1>Looks like You're offline!!! Please check your internet connection...</h1>
    return apiData.length===0? <ShimmerUI/>:(
      <div className='body'>
          <div className='flex'> 
          <div className="m-4 p-4">
              <input type="text" className="border  border-solid border-black " value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
              }}/>
              <button className="ml-12 px-4 py-2 m-2 bg-green-100 hover:bg-green-400 rounded-lg" onClick={()=>{
           
              const filteredData1=  apiData.filter((data)=>data.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
              //  setApiData(filteredData);
                {if(filteredData1.length==0){
                  console.log("page not found");
                  return <ShimmerUI/>;
                }else setFilteredData(filteredData1)}
                console.log(filteredData1)
              }}>Search</button>
          </div>
          <div className="flex items-center">
          <button className=" px-4 py-2 m-2 bg-gray-100 hover:bg-gray-400 rounded-lg" 
          onClick={()=>{
           let dataList1=apiData.filter((data)=>data?.rating>4.5);
            console.log(dataList1)
            setFilteredData(dataList1);
          }}
          >
            Top Rated Recipies
          </button>
          </div>
          
          </div>
          <div className='flex flex-wrap rounded-lg'>
           {filteredData.map((resData)=>(
           <Link to={"/recipe/"+resData.id} key={resData.id}><ResCard  restaData={resData} /></Link>))}
          
  
          </div>
      </div>
    )
  }
  export default Body;