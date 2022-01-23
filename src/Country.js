import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
class Country extends React.Component{
    constructor(){
       super();
       this.state = {
          arr : []
       }
    }

    //componentDidMount() is the life cycle hook used to make the GET Requests.
    componentDidMount(){
        axios.get("https://restcountries.com/v3.1/all")
             .then((posRes)=>{
                console.log(posRes);
                this.setState({
                   arr : posRes.data
                })
             },(errRes)=>{
              console.log(errRes);
        });
    };

    

    render(){
      return(
          <Container fluid className="mt-5">
              <Table bordered
                     hover
                     striped
                     size="sm"
                     variant="dark">
                  <thead>
                      <tr>
                          <th>SNO</th>
                          <th>Capital</th>
                      </tr>
                  </thead>
                  <tbody>
                       {this.state.arr.map((element,index)=>(
                          <tr key={index}>
                              <td>{index+1}</td>
                              <td>{}</td>
                          </tr>
                       ))}
                  </tbody>
              </Table>
          </Container>
      )
    }

};
export default Country;