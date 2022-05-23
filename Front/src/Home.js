import { useEffect } from "react";

import Video from "./components/Video/Video";
import VideoState from "./context/VideoState";

import Options from "./components/options/Options";
import Footer from "./components/Footer/Footer";

import Menu from './components/menu/menu.component'
import Game from './components/Game/Game.compnent'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css";

const Home = () => {
  useEffect(() => {
    if (!navigator.onLine) alert("Connect to internet!");
  }, [navigator]);
 
 useEffect(()=>{
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {  
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
 }, [])
  return (
    <VideoState>
      <Menu/>
      <Row>
        <Col sm={1}>
        </Col>
        <Col sm={5} >
        <Game />
        </Col>

        <Col sm={6} className='justify-content-start text-start'>
        <Video />
        </Col>
      </Row>
      
    </VideoState>
  );
};

export default Home;
