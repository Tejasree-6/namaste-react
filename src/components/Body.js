import ResCard from "../ResCard";
import { dataList } from "../utils/mockData";
const Body=()=>{
    return (
      <div className='body'>
          <div className='search'> Search</div>
          <div className='res-container'>
           {dataList.map((resData)=>
           <ResCard key={resData.id}restaData={resData}
           
           />)}
          
  
          </div>
      </div>
    )
  }
  export default Body;