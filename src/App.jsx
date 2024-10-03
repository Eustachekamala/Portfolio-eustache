import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/404';
import Home from './pages/home';

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* <ToastContainer position="top-center" autoClose={3000} /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
