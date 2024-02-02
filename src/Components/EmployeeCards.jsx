import React, { useContext } from 'react'
import userimage from './images/user.png'
import './css/EmployeeCards.css'
import { eid_Context } from './ContextAPI/EidState';
import { useNavigate } from 'react-router-dom';

const EmployeeCards = (props) => {
  const employeeidcontext = useContext(eid_Context)
  const { set_eidstatus } = employeeidcontext;
  const { profile } = props;
  const navigate = useNavigate();
  

  const handleClick=(e)=>{
    e.preventDefault();
    set_eidstatus("true");
    localStorage.setItem('e-id',profile._id)
    navigate('/employeeDetails')
  }


  return (
    <>
      <div className='my-3'>
        <div className="card">
          <div className='mt-3 mb-0'>
            <img className="card-img-top" style={{ width: '60%', borderRadius: '50%', textAlign: 'center' }} src={userimage} alt="Card img" />
          </div>
          <div className="card-body">
            <p className="card-text" style={{ fontFamily: 'Fuzzy Bubbles , cursive', fontWeight: 'bolder', marginBottom: '8px', fontSize: '1.5rem' }}>{profile.employee_name}</p>
            <div className="card-footer">
              <p className="card-text text-muted" style={{ fontFamily: 'Fuzzy Bubbles , cursive', fontWeight: 'bolder' }}>{profile.position}</p>
            </div>
            <button onClick={handleClick} className="btn btn-sm btn-dark my-2 mb-0">Details</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default EmployeeCards