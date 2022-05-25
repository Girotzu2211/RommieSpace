import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import './menu.css'; 

class NavCustom extends React.Component{
  
    render (){
        return (
        <Nav className='justify-content-end text-end'>

            <Nav.Item>
            <Button variant="light" className='m-2' size='sm' href='/'>
              Log Out button 
            </Button>
            </Nav.Item>

        </Nav>);
    }
}

export default NavCustom;