import { Link } from "react-router-dom";
import FormInput from '../FormInput/FormInput';
import './SignIn.styles.scss';
import {useState} from 'react';

function SignIn({person}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doctor, setDoctor] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleOnClick = () => {
    if( doctor === true)
    {
      setDoctor(false);
    }
    else{
      setDoctor(true);
    }
  }

  return (
    <div className="containr bg-light">
        <div className="sign-in">
          <form onSubmit={handleSubmit} className="form-box">
          <h3>Sign In as a {person}</h3>
            <FormInput
              name="email"
              type="email"
              handleChange={handleEmailChange}
              value={email}
              label="Email"
              required
            />
            <FormInput
              name="password"
              type="password"
              handleChange={handlePasswordChange}
              value={password}
              label="Password"
              required
            />
            <button type="submit" class="btn btn-primary">Submit</button>
            <h4>OR</h4>
            <div className="doctor">
            {doctor ? (<Link to='/signindoc'>
            <button type="submit" class="btn btn-success" onClick={handleOnClick}>Sign in as a Doctor</button>
            </Link>) : (<Link to='/signin'>
            <button type="submit" class="btn btn-success" onClick={handleOnClick}>Sign in as a Patient</button>
            </Link>)}
            </div>
          </form>
        </div>
      </div>
  );
}

export default SignIn;
