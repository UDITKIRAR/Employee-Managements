import React from 'react'
import About from './About';
import Navigation from './Navbar';
import Manage from './Manage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './AddEmployeeForm';
import ManagerHome from './ManagerHome';
import EmployeeDetails from './EmployeeDetails';
import EditEmployeeDetails from './EditEmployeeDetails';

export default function ManagerInterface() {
  return (
        <Router>
          <div className="App">
            <Navigation />
            {/* <Alert/> */}
            <Routes>
              <Route exact path='/' element={<ManagerHome />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/addEmployee' element={<AddEmployee />} />
              <Route exact path='/employeeDetails' element={<EmployeeDetails/>} />
              <Route exact path='/manage' element={<Manage />} />
              <Route exact path='/editEmployeeDetail' element={<EditEmployeeDetails/>}/>
            </Routes>
          </div>
        </Router>
  )
}
