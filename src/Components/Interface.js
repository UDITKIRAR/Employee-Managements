import React, { useContext,useEffect } from 'react'
import FrontInterface from "./FrontInterface";
import ManagerInterface from './ManagerInterface'
import { loggedContext } from './ContextAPI/Loggedin';


const Interface = () => {
    const context = useContext(loggedContext);
    const {status,setstatus} = context;
    
    useEffect(() => {
        if(localStorage.getItem('token')){
            setstatus("true");
        }
        // eslint-disable-next-line
    },[status]);
    
    return (
        <>
            {(status==="false") && <FrontInterface />}
            {(status==="true") && <ManagerInterface />}
        </>
    )
}

export default Interface