import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Wishes from './wish';
import Ultimate from './ultimate';
import Test from './test';
// import Game from './ballon_game/game';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/flowers' element={<Wishes/>}/>
          <Route path='/celebs' element={<Ultimate/>}/>
          <Route path='/test' element={<Test/>}/>
          {/* <Route path='/game' element={<Game/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
