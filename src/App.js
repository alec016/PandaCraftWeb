import { Routes,  Route, BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Privacy from './components/Privacy';
import Profile from './components/Profile';
import Staff from './components/Staff'
import StaffAccount from './components/StaffAccount'
import './components/css/commons.scss'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/PandaCraftWeb/docs/" element={<Home/>}/>
          <Route path="/PandaCraftWeb/docs/about" element={<About/>}/>
          <Route path="/PandaCraftWeb/docs/privacy" element={<Privacy/>}/>
          <Route path="/PandaCraftWeb/docs/profile" element={<Profile/>}/>
          <Route path="/PandaCraftWeb/docs/profile/staff" element={<Staff/>}/>
          <Route path="/PandaCraftWeb/docs/profile/staff/account" element={<StaffAccount/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}