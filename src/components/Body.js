import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { stores } from "../utils/mockData";
import ShimmerUI from "./ShimmerUI";
import PageNotFound from "./PageNotFound";
import { Link } from "react-router-dom";

 


const Body=()=>{
  const [dataList,setDataList]=useState(stores);
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
    return apiData.length===0? <ShimmerUI/>:(
      <div className='body'>
          <div className='filter'> 
          <div className="search">
              <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
              }}/>
              <button onClick={()=>{
           
              const filteredData1=  apiData.filter((data)=>data.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
              //  setApiData(filteredData);
                {if(filteredData1.length==0){
                  console.log("page not found");
                  return <ShimmerUI/>;
                }else setFilteredData(filteredData1)}
                console.log(filteredData1)
              }}>Search</button>
          </div>
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
           {filteredData.map((resData)=>(
           <Link to={"/recipe/"+resData.id} key={resData.id}><ResCard  restaData={resData} /></Link>))}
          
  
          </div>
      </div>
    )
  }
  export default Body;