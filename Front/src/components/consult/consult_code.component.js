import React from 'react';

import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


import axios from 'axios';



class Consult_code extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            cod_envio:null,
            status:null,
            tablita:null,

        }


    }
    onChangeCode(event){
        let state = this.state;
        state.cod_envio = parseInt(event.target.value);
        this.setState(state);
    }
    
    handleForm(event){
        event.preventDefault();

        let state = this.state;

        axios.get('https://back-spch.herokuapp.com/getStatus',  {
            params: {
               'cod_envio': this.state.cod_envio
            }
          }).
            then( response =>{
                state.tablita =true;
                state.status = response.data;
                this.setState(state);
                
        }).catch(function (error) {
            alert("Error: " + error.response.data)

        })
        
        
    }

    render(){
        return(

    <Row>


            <Form onSubmit={this.handleForm.bind(this)}>
                <Form.Group className="mb-3 text-start" >
                    <Form.Label>Ingrese código de envío</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="1"
                        onChange={this.onChangeCode.bind(this)}
                    />
                    
                </Form.Group>
                
                <Button type="submit" variant="outline-primary" className='lg'>
                    Consultar
                </Button>

            </Form>
            <br></br>
            { this.state.tablita && 
            
            <Row>

            
            <h4 className='text-start' >
                Información envíos
            </h4>
            <Table striped bordered hover className='text-start'>
            <thead>
                <tr>
                <th># Envío</th>
                <th>Usuario Dest</th>
                <th>Status</th>
    
                </tr>
            </thead>
            <tbody>
            {
                this.state.status.map((envio) =>
                <tr>
                    <td>{envio.cod_envio}</td>
                    <td>{envio.user_id_to}</td>
                    <td>{envio.packet_status}</td>

                </tr>
              )
            }
                
            </tbody>
            </Table>
        </Row>
            
            }

    </Row>
            
        );
    }
}

export default Consult_code;
