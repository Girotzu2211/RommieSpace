import React from 'react';
import logo from './../../img/icons.png';
import './../../Login.css';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
import axios from 'axios';


class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            nombre:"",
            correo:"",
            pwd:""

        };

    }

    handleName(event){
        let state = this.state;
        state.nombre =  event.target.value;
        this.setState(state);
    }
    handleMail(event){
        let state = this.state;
        state.correo =  event.target.value;
        this.setState(state);
    }

    handlePwd(event){
        let state = this.state;
        state.pwd =  event.target.value;
        this.setState(state);
    }

    handleSubmit(event){
        event.preventDefault();

        axios.post('http://localhost:5000/nuevo_usuario', this.state).
            then( function (){
                alert("Usuario Registrado !!!");
                window.location = "/"
        }).catch(function (error) {
               alert("Error inesperado !!!");
             
        })

    }



    render () {
        return (
        <>           
        <div className="Login">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>
            Crear una cuenta
            </h1>
            <br></br>
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group className="mb-3 text-start">
                    <Form.Label>
                        Nombre Completo
                    </Form.Label>
                    <Form.Control
                        required
                        type="text" 
                        placeholder="Nombre" 
                        value={this.state.nombre}
                        onChange={this.handleName.bind(this)}
                    />
                </Form.Group>

                <Form.Group className="mb-3 text-start">
                    <Form.Label>
                        Correo
                    </Form.Label>
                    <Form.Control
                        required
                        type="email" 
                        placeholder="Email" 
                        value={this.state.correo}
                        onChange={this.handleMail.bind(this)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 text-start">
                    <Form.Label>
                        Contraseña
                    </Form.Label>
                    <Form.Control
                        required
                        type="password"
                        value={this.pwd}
                        onChange={this.handlePwd.bind(this)}
                    />
                </Form.Group>

                
                <Button block size="lg" type="submit" className='my-2' >
                    Registrarse
                </Button>
                <Button variant="light" className='mx-4' size='lg'>
                        <Link to={"/"}>
                        ¿Ya tienes cuenta?
                        </Link>
                    </Button>
            </Form>
        </div>

        </>);
    }
}

export default Home;