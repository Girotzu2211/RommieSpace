import React from 'react';

import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


import axios from 'axios';



class Consult_cc extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            user_id_to:null,
            show_result:null,
            status:null,
            tablita:null,

        }


    }
    onChangeCedula(event){
        let state = this.state;
        state.user_id_to = parseInt(event.target.value);
        this.setState(state);
    }
    
    handleForm(event){
        event.preventDefault();

        let state = this.state;

        axios.get('https://back-spch.herokuapp.com/getStatus',  {
            params: {
               'user_id_to': this.state.user_id_to
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
                    <Form.Label>Ingrese cédula del destinatario</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="1"
                        onChange={this.onChangeCedula.bind(this)}
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
            <Table striped bordered hover >
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

export default Consult_cc;
