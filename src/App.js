import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayList from './Components/Assignment1/DisplayList';
import Home from './Components/Assignment2/Home';
import Contact from './Components/Assignment2/Contact';
import Aboutus from './Components/Assignment2/Aboutus';

function App() {
  return(
    <>
      {/* <DisplayList/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
