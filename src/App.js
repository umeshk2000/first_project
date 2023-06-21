
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login'
import Forget from './pages/Forget';
// import styled from 'styled-components';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'


function App() {
  return (
    <>
    {/* <SignUp/> */}
     {/* <Login/> */}
     {/* <Forget/> */}

<Routes>
  <Route path='/SignUp'element={ <SignUp/>}></Route>
  <Route path='/Login'element={<Login/>}></Route> 
   <Route path='/Forget'element={<Forget/>}></Route>
</Routes>


<NavLink path='/SignUp'element={ <SignUp/>}></NavLink>
<NavLink path='/Login'element={<Login/>}></NavLink>
<NavLink  path='/Forget'element={<Forget/>}></NavLink>



    </>
  );
}

export default App;

