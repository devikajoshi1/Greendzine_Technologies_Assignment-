import './App.css';
import { Route, Routes } from "react-router-dom";
import EmpList from './components/EmpList/emp.component';
import Login from './components/Login/login.componet';
import Home from './components/Home/home.component';
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Login />}/>
        <Route path="login" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/emp" element={<EmpList/>} />
        </Routes>
      
    </div>
  );
}

export default App;
