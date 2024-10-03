import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/404';
import About from './pages/about';
import Home from './pages/home';
import Contacts from './pages/contacts';
import Projects from './pages/projects';

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* <ToastContainer position="top-center" autoClose={3000} /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contacts' element={<Contacts/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
