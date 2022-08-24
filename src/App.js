import './App.css';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom';
import Patient from './Components/Patient/Patient';
import Welcome from './Components/Welcome/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/patient' element={<Patient />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/welcome' element={<Welcome />}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
