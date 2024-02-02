import React from 'react'


//* Initial Page Rendering Requirements
import Navigation from './Navbar';
import LandingPage from './LandingPage';
import About from './About';

//* Manager Page Rendering Requirements
// import ManagerHome from './ManagerHome';
// import AddEmployee from './AddEmployeeForm';
// import Manage from './Manage';

//* Loading the Context API's
// import ProfileState from './ContextAPI/ProfileState';

//* Other Requirements
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoggedinState from './ContextAPI/Loggedin';

export default function FrontInterface() {
  return (
        <Router>
          <div className="App">
            <Navigation/>
            <Routes>
              <Route exact path='/' element={<LandingPage />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
        </Router>
  )
}
