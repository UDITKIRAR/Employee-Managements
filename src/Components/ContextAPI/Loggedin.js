import { createContext, useState } from "react"; 
const loggedContext = createContext(); 
export {loggedContext} ;

const LoggedinState=(props)=>{
    const [status,setstatus]=useState("false");

    // let changeStatus=(value)=>{
    //     setstatus(value);
    // }

    return <loggedContext.Provider value={{ status,setstatus}}>
        {props.children}
    </loggedContext.Provider>
}

export default LoggedinState