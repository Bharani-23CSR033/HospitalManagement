
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import DoctorLogin from './Components/DoctorLogin';
import DoctorSignup from './Components/DoctorSignup';
import UserSignUp from './Components/UserSignUp';
import UserLogin from './Components/USerLogin';
import Contact from './Components/Contact';
import Doctors from './Components/Doctors'
import LandingPage from './Components/LandingPage';
import Role from './Components/Role';
import AdminLogin from './Components/AdminLogin';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage'
import AppointmentForm from './Components/AppointmentForm';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element = {<LandingPage/>}/>
      <Route path="/userLogin" element ={<UserLogin/>}/>
      <Route path="/userSignUp" element = {<UserSignUp/>}/>
      <Route path="/doctorLogin" element = {<DoctorLogin/>}/>
      <Route path="/doctorSignUp" element = {<DoctorSignup/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/doctors" element = {<Doctors/>}/>
      <Route path="/role" element = {<Role/>}/>
      <Route path="/adminLogin" element={<AdminLogin/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/appointment" element={<AppointmentForm/>}/>
    </Routes>
   </Router>
  );
}

export default App;
