import React, { useContext, useEffect } from 'react'
import userimage from './images/user.png'
import EmployeeCards from './EmployeeCards';
import profileContext from './ContextAPI/profileContext';
import {useNavigate } from 'react-router-dom';
import { eid_Context } from './ContextAPI/EidState';
import { Link } from 'react-router-dom';
import './css/managerhome.css'

export default function ManagerHome() {
  
  const context = useContext(profileContext);
  const { profiles, getProfiles } = context;

  const employeeidcontext = useContext(eid_Context)
  const { eid_status, set_eidstatus} = employeeidcontext;

  let navigator= useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
      getProfiles()
      if(eid_status==="true"){
        localStorage.removeItem("e-id");
        set_eidstatus("false");
      }
    }
    else{
      navigator('/')
    }
  }, // eslint-disable-next-line
  [])
  // console.log(profiles)
    return (
      <>
      <div className='container center-block text-center' style={{ marginTop: '6rem' }}>
        <div className='d-inline-block mx-auto my-3' >
          <img className='.img-fluid .img-thumbnail' src={userimage} style={{ height: '17rem', borderRadius: '50%' }} alt="" />
        </div>
        <div className='d-inline-block text-center align-middle'>
          <h1 className='mx-5'>Hey Mohit</h1>
          <h3 className='mx-5 text-muted my-2' >Manager at IIIT Sonepat</h3>
          <h4 className='mx-5 text-muted my-2'>Since 2021</h4>
        </div>
      </div>

      <hr className='hori' />
      

      <h2 style={profiles.length>0?{display:'block'}:{display:'none'}}>You are managing </h2>
      <h2 style={profiles.length>0?{display:'none'}:{display:'block'}}>Currently, You are not managing anyone. </h2>
      <Link to='/addemployee' style={{textDecoration:'none'}}><button type="button" className="custom-btn btn-6 m-auto" style={profiles.length>0?{display:'none'}:{display:'block'}}> Add an employee </button></Link>


      <div className="container my-3 text-center">
        <div className='card-group col justify-content-center'>
          {profiles.map((profile) => {
            return <div key={profile._id} className="mx-3 card-width-14rem">
              <EmployeeCards id={profile._id} profile={profile} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}
