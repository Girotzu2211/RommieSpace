import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pomodoro from './Pomodoro'


import Menu from '../../components/menu/menu.component'


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
                <h2>
                    Este es su espacio de concentración
                </h2>

                <Pomodoro/>
                </Col>
                <Col sm={2}></Col>
            </Row>
            
        </>);
    }
}



export default withParams(Feed);
