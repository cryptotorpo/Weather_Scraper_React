import './App.css';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Validator from './components/ValidatorPage';
import Employee from './components/EmployeePage';
import Customer from './components/CustomerPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/validator' element={<Validator />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/customer' element={<Customer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
