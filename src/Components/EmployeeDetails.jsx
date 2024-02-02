import React from 'react'
import { useContext } from 'react'
import profileContext from './ContextAPI/profileContext'
import { eid_Context } from './ContextAPI/EidState'
import {useNavigate } from 'react-router-dom';
import './css/employeeDetails.css'

const EmployeeDetails = () => {
    const navigator=useNavigate();

    const context = useContext(profileContext);
    const { profiles, deleteProfile } = context;

    const employeeidcontext = useContext(eid_Context)
    const { set_eidstatus } = employeeidcontext;

    // console.log(element)
    var element = profiles[0];
    console.log(localStorage.getItem('e-id'))
    for (let index = 0; index < profiles.length; index++) {
        if (profiles[index]._id === localStorage.getItem('e-id')) {
            element = profiles[index];
            break;
        }
    }


    let tempname = "";
    let anothername = element.employee_name.split(" ")
    for (let index = 1; index < anothername.length; index++) {
        tempname = anothername[index] + " ";
    }

    const Deletethis = (e) => {
        e.preventDefault();
        deleteProfile(element._id)
        set_eidstatus("false")
        localStorage.removeItem('e-id')
        navigator('/')
    }

    const GoBack = (e) => {
        e.preventDefault();
        localStorage.removeItem('e-id')
        set_eidstatus("false");
        navigator('/')
    }

    const EditDetails=(e)=>{
        e.preventDefault();
        navigator('/editEmployeeDetail')
    }

    return (
        <>
            <main className="e-details-profile e-details-body">
                <div className="e-details-profile-bg"></div>
                <section className="e-details-container">
                    <aside className="e-details-profile-image">
                        <a className="e-details-camera" href="/">
                            <i className="fas fa-camera"></i>
                        </a>
                    </aside>
                    <section className="e-details-profile-info">
                        <h1 className="e-details-first-name">{`${element.suffix} ${element.employee_name.split(" ")[0]}`}</h1>
                        <h1 className="e-details-second-name">{tempname}</h1>
                        <h2 style={{ "marginLeft": "50px" }}>{element.position}</h2>

                        <aside className="e-details-social-media-icons">
                            <p>
                                {/* eslint-disable-next-line */}
                                <a rel="noreferrer" href="#" className='mx-2'>
                                    <i className="fa fa-envelope"></i>
                                </a>
                                {element.employee_email}
                            </p>
                        </aside>
                        <aside className="e-details-social-media-icons">
                            <p>
                                {/* eslint-disable-next-line */}
                                <a rel="noreferrer" className='mx-2' href="#">
                                    <i className="fa fa-phone fa-rotate-90"></i>
                                </a>
                                {element.phoneNumber}
                            </p>
                        </aside>
                        {/* <aside className="e-details-social-media-icons"> */}
                        {/* <p> */}
                        {/* eslint-disable-next-line */}
                        {/* <a rel="noreferrer" href="#" className='mx-2'> */}
                        {/* <i className="fa fa-globe"></i> */}
                        {/* </a> */}
                        {/* {element.country} */}
                        {/* </p> */}
                        {/* </aside> */}
                        <aside className="e-details-social-media-icons">
                            <p>
                                {/* eslint-disable-next-line */}
                                <a rel="noreferrer" href="#" className='mx-2'>
                                    <i className="fa fa-map-pin"></i>
                                </a>
                                {element.zip_Code}
                            </p>
                        </aside>

                        <aside className="e-details-social-media-icons">
                            {/* eslint-disable-next-line */}
                            <a rel="noreferrer" href="/" className='mx-2' onClick={EditDetails}>
                                <i className="fa fa-pen"></i>
                            </a>
                            <a rel="noreferrer" href="/" className='mx-2' onClick={Deletethis}>
                                <i className="fa fa-trash"></i>
                            </a>
                        </aside>

                    </section>
                </section>
                <section className="e-details-statistics">
                    <button className="e-details-icon e-details-arrow e-details-left"></button>
                    <button className="e-details-icon e-details-arrow e-details-right"></button>
                    <p><strong>{element.salary}</strong> Salary</p>
                    <p><strong>{element.age}</strong> Age</p>
                    <p><strong>{element.country}</strong> Country</p>
                    {/* <p><strong className="d-block">{`${element.date_ofJoining.slice(0,10)}`}</strong> Date Of Joining</p> */}
                </section>
                <a href="/" onClick={GoBack}>
                    <button className="e-details-icon e-details-close mt-5" style={{ "width": "100px" }}>Go Back</button>
                </a>
            </main>
        </>
    )

}

export default EmployeeDetails