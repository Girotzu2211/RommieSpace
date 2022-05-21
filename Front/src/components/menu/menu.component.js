import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavCustom from './nav.component'

import logo from './../../img/full_white.png';

import './menu.css'; 

class Menu extends React.Component{

    render(){
        return(

    <Row className='navi'>

        <Col sm={4}>  
        <img src={logo} className="logo" alt="Icono de la app"/>

        </Col>

        <Col sm={7} className='justify-content-end text-end'>
        <NavCustom></NavCustom>
        </Col>
        <Col sm={1}>
        </Col>
    </Row>
            
        );
    }
}

export default Menu;

