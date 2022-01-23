import React from 'react';
export default class Mapex extends React.Component{
  
    constructor()
    {
        super();
        this.state={
           products: [
            {'pid':111,'pname':'pone','pcost':10000},
            {'pid':222,'pname':'ptwo','pcost':20000},
            {'pid':333,'pname':'pthree','pcost':30000},
            {'pid':444,'pname':'pfour','pcost':40000},
            {'pid':555,'pname':'pfive','pcost':50000},
            {'pid':666,'pname':'psix','pcost':60000}],
            sub:'ReactJS'
        }
    }
    render()
    {
        return(
            <div>
              <h1>Subject is {this.state.sub}</h1>
              {
                    this.state.products.map(
                    (element,index)=>(
                    <h3>pid:{element.pid},
                       pname:{element.pname},
                       pcost:{element.pcost}</h3>)
                )
              }
            </div>
        )
    }
}
