const ResCard=(props)=>{
    const {restaData}=props;
 
   
     return (
       <div className='m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-200'>
         <img alt='Biryani logo' className='res-logo rounded-md' src={restaData?.image} onClick={()=>{
              
                
         }} />
         <h3 className="font-bold py-2 text-lg">{restaData?.name}</h3>
         <h5>Cuisine: {restaData?.cuisine} </h5>
         <h5>{restaData?.rating} rating</h5>
         {/* <h5>{restaData?.meta[0]?.text}</h5> */}
   
       </div>
     )
   }
   export default ResCard;
    
  // create a higher oder component which will take ResCard as the input and it returns me a new component which is a enhanced ResCard which has a lable on top of it 
  // input - ResCard ==>> ResCardLable 

  // this HOF is a function which takes in ResCard as i/p & it will return another component 

  export const WithLabel=(ResCard)=>{
    return(props)=>{
      return(
        <div>
          <label className="  absolute bg-black text-white m-2 p-2 rounded-lg">{props.restaData.difficulty}</label>
          <ResCard {...props}/>
        </div>
      )
    }
  }