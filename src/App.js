import './App.css';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom';
import Patient from './Components/Patient/Patient';
import Welcome from './Components/Welcome/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctors from './Components/Doctors/Doctors';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/patient' element={<Patient />} />
      <Route path='/welcome' element={<Welcome />}/>
      <Route path='/doctors' element={<Doctors/>}/>
      </Routes>
    </div>
  );
}

export default App;
