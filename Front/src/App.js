
import './App.css';

import Container from 'react-bootstrap/Container';

import Home from './pages/home/home.page'
import Feed from './pages/spaces/Feed.page'
import Registro from './pages/spaces/registro.page'
import Video from "./Home";
import Game from "./components/Game/Game.compnent"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {  
  return (
    <div className="App">
      <Container fluid>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/Feed/:Nombre" element={<Feed />} />
              <Route path="/Registro" element={<Registro />} />
              <Route path="/VideoChat" element={<Video />} />


            </Routes>
        </BrowserRouter>

      </Container>
    </div>
  );
}

export default App;

