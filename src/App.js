import { Routes,  Route, BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Privacy from './components/Privacy';
import Profile from './components/Profile';
import './components/css/commons.scss'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}