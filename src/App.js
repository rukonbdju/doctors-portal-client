
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
      </Routes>
    </div>
  );
}

export default App;
