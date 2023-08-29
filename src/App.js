import './App.css';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Validator from './components/ValidatorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/validator' element={<Validator />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
