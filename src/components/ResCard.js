const ResCard=(props)=>{
    const {restaData}=props;
 
   
     return (
       <div className='m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-200'>
         <img alt='Biryani logo' className='res-logo rounded-md' src={restaData?.image} onClick={()=>{
                console.log("image onclick");
               
                
         }} />
         <h3 className="font-bold py-2 text-lg">{restaData?.name}</h3>
         <h5>Cuisine: {restaData?.cuisine} </h5>
         <h5>{restaData?.rating} rating</h5>
         {/* <h5>{restaData?.meta[0]?.text}</h5> */}
   
       </div>
     )
   }
   export default ResCard;
    