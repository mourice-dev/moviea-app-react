import './css/App.css';
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar.jsx';
import './css/App.css';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorite" element={<Favorite />} />
      </Routes>
    </>
  )

}

export default App