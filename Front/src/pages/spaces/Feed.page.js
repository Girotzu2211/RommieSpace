import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../../components/Footer/Footer";
import Options from "../../components/options/Options";

import Video from "../../components/Video/Video";


import Button from 'react-bootstrap/Button';

import Menu from '../../components/menu/menu.component'

import axios from 'axios';

import {
    useNavigate,
    useParams,
  } from "react-router-dom";


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}


class Feed extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            Nombre: this.props.params.Nombre
        }
        console.log(this.props);
    }


    render () {
        return (
        <>
            <Menu/>

            <Row>

                <Col sm={2}></Col>


                <Col sm={8}>
                    
                <h1>
                    Bienvenido {this.state.Nombre}
                </h1>
                <Footer/>
                </Col>
                <Col sm={2}></Col>
            </Row>
            
        </>);
    }
}



export default withParams(Feed);
