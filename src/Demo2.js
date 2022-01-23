import React from 'react'
class Demo2 extends React.Component
{
   constructor()
   {
       super();
       this.state = {count : 0};
   }

   countIncHandler=()=>{
        this.setState(
            {
                 count:this.state.count+1
            }
        )
   }
   countDecHandler=()=>{
    this.setState(
        {
             count:this.state.count-1
        }
    )
}

   render()
   {
       return(
           <div>
               <h1> AFFY INFORMATICS </h1>
               <button onClick={this.countIncHandler}>CLICK ME For Inc</button>
               <button onClick={this.countDecHandler}>CLICK ME For Dec</button>
             
               <h2>{ this.state.count}</h2>
           </div>
       );
   }
}

export default Demo2;