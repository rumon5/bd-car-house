import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Toaster } from 'react-hot-toast';
import VerifyEmail from './components/VerifyEmail/VerifyEmail';
import Inventory from './components/Inventory/Inventory';
import RequireAuth from './components/RequireAuth/RequireAuth';
import CarDelivered from './components/CarDelivered/CarDelivered';


function App() {
  
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/inventory' element={<Inventory/>}></Route>
       <Route path='/inventory/:id' element={
         <RequireAuth>
           <CarDelivered/>
         </RequireAuth>
       }></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/verifyEmail' element={<VerifyEmail/>}></Route>
     </Routes>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
