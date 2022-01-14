import './App.css';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;
