import { List } from '@mui/material';
import './App.css';
import Landing from './components/Landing';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
https://numis-nexus.vercel.app/
*/
