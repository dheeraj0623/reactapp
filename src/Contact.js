import React, { Component } from 'react';

class Contact extends Component
{
   constructor(props)
   {
       super(props);
       this.state={
                fullname:"dheeraj",
                email:"gupta.dheeraj23@gmail.com",
                mobile:"9098277222"
                  }
   }    
/*   nameHandler=(event)=>
   {
       this.setState({
           fullname:event.target.value
       })
   }
       
   emailHandler=(event)=>
   {
       this.setState({
           email:event.target.value
       })
   }

       
   mobileHandler=(event)=>
   {
       this.setState({
           mobile:event.target.value
       })
   }
*/
   changeallHandler=(event)=>{
      this.setState({
        [event.target.name]:event.target.value    
      })
   }

   submitHandler=(event)=>
   {
      alert(`my name is ${this.state.fullname} 
             email is ${this.state.email}
             mobile is ${this.state.mobile}`);
      
      event.preventDefault();
   }

   render() {
   return(
      <>
        <form onSubmit={this.submitHandler}>
            <label>Enter FullName</label>
            <input type="text" name="fullname"  onChange={this.changeallHandler}/>
             <br/>
            <label>Enter Email</label>
            <input type="email" name="email"  onChange={this.changeallHandler}/>
            <br/>
            <label>Enter Mobile</label>
            <input type="number" name="mobile" onChange={this.changeallHandler}/>
            <br/>
            <input type="submit" value="send"/>
        </form>
      </>
   );
}

}
export default Contact;
