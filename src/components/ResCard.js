const ResCard=(props)=>{
    const {restaData}=props;
 
    
     return (
       <div className='res-card'>
         <img alt='Biryani logo' className='res-logo' src={restaData?.image} />
         <h3>{restaData?.name}</h3>
         <h5>Cuisine: {restaData?.cuisine} </h5>
         <h5>{restaData?.rating} rating</h5>
         {/* <h5>{restaData?.meta[0]?.text}</h5> */}
   
       </div>
     )
   }
   export default ResCard;
    