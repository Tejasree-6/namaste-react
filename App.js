import React from 'react';
import  ReactDOM  from 'react-dom/client';

const Title=()=>{
   return <h1>This is the Title</h1>
}
const reactELement=(
  <h2>React element inside a Js Component</h2>
);
const Headingcomponent=()=> {
    return (
    <div>
          <Title/> 
          {reactELement}
          <h3>Hello from functional component🚀
          </h3>
     </div>
    )
    
    };
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Headingcomponent/>);