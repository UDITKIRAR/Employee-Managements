import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './css/addEmployee.css'
import { useState } from 'react';
import profileContext from './ContextAPI/profileContext';

export default function Form() {
  let navigator = useNavigate();

  const context = useContext(profileContext);
  const { profiles, updateProfile } = context;

  // eslint-disable-next-line
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);
  const { result, uploader } = useDisplayImage();

  var element = profiles[0];
  console.log(localStorage.getItem('e-id'))
  for (let index = 0; index < profiles.length; index++) {
    if (profiles[index]._id === localStorage.getItem('e-id')) {
      element = profiles[index];
      break;
    }
  }

  function useDisplayImage() {
    const [result, setResult] = React.useState("");
    function uploader(e) {
      const imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });
      reader.readAsDataURL(imageFile);
    }
    return { result, uploader };
  }

  const [details, setdetails] = useState({ position: `${element.position}`, age: `${element.age}`, phoneNumber: `${element.phoneNumber}`, country: `${element.country}`, zip_code: `${element.zip_Code}`, salary: `${element.salary}` });

  const changing = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProfile(element._id,details.position, details.age, details.phoneNumber, details.country, details.zip_code, details.salary);
    setdetails({ position: `${element.position}`, age: `${element.age}`, phoneNumber: `${element.phoneNumber}`, country: `${element.country}`, zip_code: `${element.zip_Code}`, salary: `${element.salary}` });
    navigator('/employeeDetails');
  }

  return (
    <section className="h-100 h-custom gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}>General Infomation</h3>

                      <div className="App">
                        <input
                          type="file"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                            uploader(e);
                          }}
                        />
                        {result && <img ref={imageRef} src={result} alt="" />}
                      </div>
                      <br />

                      <div className="mb-4 pb-2" style={{ "width": "100%" }}>
                        <div className="form-outline">
                          <input name='employee_name' type="text" id="form3Examplev2" className="form-control form-control-lg" placeholder={`${element.suffix} ${element.employee_name}`} readOnly />
                          <label className="form-label" htmlFor="form3Examplev2">Employee Name</label>
                        </div>

                        <div className="form-outline form-white mt-3">
                          <input name='employee_email' placeholder={`${element.employee_email}`} readOnly type="text" id="form3Examplea9" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea9">Employee Email</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-4 pb-2">
                          <div className="form-outline">
                            <input name='position' placeholder={`${element.gender}`} readOnly type="text" id="form3Examplev5" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplev5">Gender</label>
                          </div>
                        </div>
                        <div className="col-md-7 mb-4 pb-2">
                          <div className="form-outline">
                            <input name='position' placeholder={`${element.position}`} onChange={changing} value={details.position} type="text" id="form3Examplev5" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplev5">Position</label>
                          </div>
                        </div>
                      </div>



                    </div>
                  </div>

                  <div className="col-lg-6 bg-indigo text-white">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5">Contact Details</h3>
                      <div className="mb-4">
                      </div>

                      <div className="row">
                        <div className="col-md-4 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input name='age' onChange={changing} placeholder={`${element.age}`} value={details.age} type="number" id="form3Examplea7" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea7">Age</label>
                          </div>

                        </div>
                        <div className="col-md-8 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input name='phoneNumber' onChange={changing} placeholder={`${element.phoneNumber}`} value={details.phoneNumber} type="text" id="form3Examplea8" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea8">Phone Number</label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input name='country' onChange={changing} placeholder={`${element.country}`} value={details.country} type="text" id="form3Examplea6" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea6">Country</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input name='zip_code' onChange={changing} placeholder={`${element.zip_Code}`} value={details.zip_code} type="text" id="form3Examplea4" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea4">Zip Code</label>
                          </div>
                        </div>
                        <div className="col-md-7 mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input name='salary' onChange={changing} placeholder={`${element.salary}`} value={details.salary} type="number" id="form3Examplea5" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea5">Salary</label>
                          </div>
                        </div>
                      </div>

                      <button name='submit' onClick={handleSubmit} type="submit" className="btn btn-light btn-lg"
                        data-mdb-ripple-color="dark">Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


