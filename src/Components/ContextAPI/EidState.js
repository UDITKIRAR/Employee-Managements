import { createContext, useState } from "react"; 
const eid_Context = createContext(); 
export {eid_Context} ;

const Eid_State=(props)=>{
    const [eid_status,set_eidstatus]=useState("false");

    return <eid_Context.Provider value={{ eid_status,set_eidstatus}}>
        {props.children}
    </eid_Context.Provider>
}

export default Eid_State