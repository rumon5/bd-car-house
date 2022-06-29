import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Toaster } from 'react-hot-toast';
import Inventory from './components/Inventory/Inventory';
import RequireAuth from './components/RequireAuth/RequireAuth';
import CarDelivered from './components/CarDelivered/CarDelivered';
import NotFound from './components/NotFound/NotFound';
import AddCar from './components/AddCar/AddCar';
import Manage from './components/Manage/Manage';
import MyCars from './components/MyCars/MyCars';
import Blogs from './components/Blogs/Blogs';
import VerifyEmail from './components/VerifyEmail/VerifyEmail';


function App() {
  
  return (
    <div className='max-w-7xl mx-auto'>
     <Header></Header>
     <Toaster></Toaster>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/inventory' element={<Inventory/>}></Route>
       <Route path='/inventory/:id' element={
         <RequireAuth>
           <CarDelivered/>
         </RequireAuth>
       }></Route>
       <Route path='/blogs' element={
         <RequireAuth>
           <Blogs/>
         </RequireAuth>
       }></Route>
       <Route path='/addCar' element={
         <RequireAuth>
           <AddCar/>
         </RequireAuth>
       }></Route>
       <Route path='/myItems' element={
         <RequireAuth>
           <MyCars/>
         </RequireAuth>
       }></Route>
       <Route path='/manage' element={<RequireAuth>
         <Manage/>
       </RequireAuth>}></Route>
       <Route path='verifyEmail' element={<VerifyEmail/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='*' element={<NotFound/>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
