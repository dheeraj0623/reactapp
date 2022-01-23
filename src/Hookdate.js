import React,{useState} from 'react';

const Hookdate =() => 
{
    let newTime=new Date().toLocaleTimeString();

    const [ctime,setCtime]=useState(newTime);
   
    const updateTime = () =>{
       let newCtime=new Date().toLocaleTimeString();
       setCtime(newCtime); 
    }
    //setInterval(updateTime,1000);
return(
        <>
         <h1>  {ctime}  </h1>
         <button onClick={updateTime}> get time </button>
         
        </>
    );
}
  
export default Hookdate;