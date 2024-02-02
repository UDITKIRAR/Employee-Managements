import ProfileContext from "./profileContext";
import { useState } from "react";

const ProfileState = (props) => {
    const host = "http://localhost:5000"
    const initailProfiles = []
    const [profiles, setProfiles] = useState(initailProfiles)

    const getProfiles = async () => {
        const response = await fetch(`${host}/api/profile/fetchEmployees`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        // console.log(json);
        setProfiles(json)
    }

    const addProfile = async (suffix,gender,employee_name,date_ofBirth,date_ofJoining,position,employee_email,age,phoneNumber,country,zip_code, salary) => {
        const response = await fetch(`${host}/api/profile/addEmployee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token').toString()
            },
            body: JSON.stringify({ suffix,gender,employee_name,date_ofBirth,date_ofJoining,position,employee_email,age,phoneNumber,country,zip_code, salary})
        });
        const json= await response.json();
        console.log("Adding a new employee", response)
        setProfiles(profiles.concat(json))
    }

    const deleteProfile = async(id)=>{
        const response = await fetch(`${host}/api/profile/deleteEmployee/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token').toString()
            },
        });
       console.log("Deleting the employee with the id "+id);
       const newsetofProfiles=initailProfiles.filter((profile)=>{return profile._id!==id});
       setProfiles(newsetofProfiles)
       console.log(response)
    }

    const updateProfile=async(id,position,age,phoneNumber,country,zip_Code,salary)=>{
        const response = await fetch(`${host}/api/profile/updateEmployee/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({position,age,salary,phoneNumber,country,zip_Code})
        });
        console.log(response)
        // const json=response.json()
        for (let index = 0; index < initailProfiles.length; index++) { 
            const element = initailProfiles[index]; 
            if (element._id === id) { 
                element.position= position; 
                element.age = age; 
                element.salary = salary;
                element.phoneNumber =phoneNumber;
                element.country=country;
                element.zip_Code=zip_Code;
            }
        }
    }

    return <ProfileContext.Provider value={{ profiles, getProfiles, addProfile, updateProfile, deleteProfile}}>
        {props.children}
    </ProfileContext.Provider>
}

export default ProfileState