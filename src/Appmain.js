import React from 'react';
import About from './About';
import Contactt from './Contactt';
import Home from './Home';
import Error from './Error';
import {Route,Switch} from "react-router-dom";
import Navbar from './Navbar';

const Appmain=()=>{
        
   return(
      <>
      <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contactt}/>
       <Route component={Error}/>
    </Switch>     
      </>
   );
}

export default Appmain;
