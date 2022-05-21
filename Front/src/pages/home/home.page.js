import React from 'react';
import logo from './../../img/icons.png';
import './../../Login.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from "react-router-dom";
import { Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';


class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            user:"",
            password:""
        };

    }

    handleUser(event){
        let state = this.state;
        state.user =  event.target.value;
        this.setState(state);
    }
    handlePwd(event){
        let state = this.state;
        state.password =  event.target.value;
        this.setState(state);
    }

    handleSubmit(event){
        event.preventDefault();

        axios.get('http://localhost:5000/login',  {
            params: {
               nombre: this.state.user,
               pwd:this.state.password
            }
          }).then( response =>{
            window.location="/Feed/"+response.data[0].nombre
                
        }).catch(function (error) {
            alert("ERROR: " + error.response.data)

        })
    }


    render () {
        return (
        <>           
        <div className="Login">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
            ¡Bienvenido de vuelta!
            </h1>
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group size="lg" controlId="email">
                <Form.Label className='justify-content-start text-start'>
                    Email
                </Form.Label>
                <Form.Control
                    autoFocus
                    required
                    value={this.state.user}
                    type="email"
                    onChange={this.handleUser.bind(this)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePwd.bind(this)}
                />
                </Form.Group>
                
                <Button block size="lg" type="submit" className='my-2'>
                    Login
                </Button>
                <Button variant="light" className='mx-4' size='lg'>
                        <Link to={"/Registro"}>
                        ¿Aún no tienes cuenta?
                        </Link>
                </Button>
            </Form>
        </div>

        </>);
    }
}

export default Home;