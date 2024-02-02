import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { loggedContext } from './ContextAPI/Loggedin';
import Login from './Login';
import React,{useContext} from 'react';

export default function Navigation() {
  const context = useContext(loggedContext);
  const{status,setstatus}=context;
  const [modalShow, setModalShow] = React.useState(false);

  const getout=()=>{
    localStorage.removeItem('e-id');
    localStorage.removeItem('token');
    setstatus("false");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" style={{position:"sticky", top:"0px",zIndex:"10000",opacity:"0.8"}}>
        <div className="container-fluid">
          <Link style={{"fontFamily":"'Kalam', cursive","fontSize":"2rem"}} className="navbar-brand mx-2" to="/">ManageIng</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className={`nav-item ${(status==="true")?"":"d-none"}`}>
                <Link className="nav-link" to="/manage">Manage</Link>
              </li>
              <li className={`nav-item ${(status==="true")?"":"d-none"}`}>
                <Link className="nav-link" to="/addEmployee">Add a Employee</Link>
              </li>
            </ul>
            <button type="button" className={`btn btn-dark px-3 ${(status==="true")?"d-none":""}`} onClick={() => setModalShow(true)}>
              Login
            </button>
              <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

            <button type="button" className={`btn btn-dark px-3 ${(status==="true")?"":"d-none"}`} onClick={getout}>
              Logout
            </button>            
          </div>
        </div>
      </nav>
    </>
  );
}