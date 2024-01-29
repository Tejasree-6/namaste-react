const ResCard=(props)=>{
    const {restaData}=props;
    console.log(restaData)
    
     return (
       <div className='res-card'>
         <img alt='Biryani logo' className='res-logo' src={restaData?.images?.main?.uri} />
         <h3>{restaData?.text?.title}</h3>
         <h5>{restaData?.text?.description}</h5>
         <h5>4.5 Rating</h5>
         <h5>35 Minutes</h5>
   
       </div>
     )
   }
   export default ResCard;
    