const ResCard=(props)=>{
    const {restaData}=props;
    console.log(restaData)
    
     return (
       <div className='res-card'>
         <img alt='Biryani logo' className='res-logo' src={restaData?.image?.items[3].url} />
         <h3>{restaData?.title?.text}</h3>
         <h5>{restaData?.rating?.text} rating</h5>
         {/* <h5>{restaData?.meta[0]?.text}</h5> */}
   
       </div>
     )
   }
   export default ResCard;
    