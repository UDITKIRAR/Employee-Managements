import './css/Login.css'
import Modal from 'react-bootstrap/Modal';
import { useState,useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { loggedContext } from "./ContextAPI/Loggedin";

// import { Link } from 'react-router-dom';


export default function Login(props) {

  const context = useContext(loggedContext);
  const {setstatus} = context;

  const host = "http://localhost:5000"
  const [isActive, setIsActive] = useState(false);
  // let navigate = useNavigate();

  const handleClick = event => {
    setIsActive(current => !current);
  };

  const LoginonChange = (e) => {
    setlogincredentials({...logincredentials, [e.target.name]: e.target.value});
  }
  const SignupOnchange = (e) => {
    setSignupcredentials({...signupcredentials, [e.target.name]: e.target.value});
  }

  const [logincredentials, setlogincredentials] = useState({email: "",password: ""})
  const [signupcredentials, setSignupcredentials] = useState({email: "",password: "",cpassword:""})
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: logincredentials.email,password: logincredentials.password})
    });
    const json = await response.json();
    if(json.success) {
      localStorage.setItem('token', json.authtoken);
      setstatus("true");
      console.log(json)
    }
    else {
      alert("Invalid credentials");
    }
  };
  
  const handleSignup = async (e) => {
    e.preventDefault();
    const {email,password}=signupcredentials
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email,password})
    });
    const json = await response.json();
    if(json.success) {
      localStorage.setItem('token', json.authtoken);
      setstatus("true");
      console.log(json)
    }
    else{
      console.log(json);
    }
  };

  return (
    <Modal style={{"marginTop":"27px"}}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-vcenter"
      centered
    >
      <Modal.Body className="forms">

        <div className={isActive ? 'form-wrapper' : 'is-active form-wrapper'} >
          <button type="button" className="switcher switcher-login" onClick={handleClick}>
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login" onSubmit={handleLogin}>
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" name='email' value={logincredentials.email} onChange={LoginonChange} type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" name='password' value={logincredentials.password} onChange={LoginonChange} type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-login">Login</button>
          </form>
        </div>

        <div className={isActive ? 'is-active form-wrapper' : 'form-wrapper'} >
          <button type="button" className="switcher switcher-signup" onClick={handleClick}>
            Sign Up
            <span className="underline"></span>
          </button>
          <form className="form form-signup" onSubmit={handleSignup}>
            <fieldset>
              <legend>Please, enter your email, password and password confirmation for sign up.</legend>
              <div className="input-block">
                <label htmlFor="email">E-mail</label>
                <input id="signup-email" name='email' onChange={SignupOnchange} value={signupcredentials.email} type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" name='password' onChange={SignupOnchange} value={signupcredentials.password} type="password" required minLength={8} />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password-confirm">Confirm password</label>
                <input id="signup-password-confirm" name="cpassword" onChange={SignupOnchange} value={signupcredentials.cpassword} type="password" required minLength={8}/>
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">Sign up</button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}