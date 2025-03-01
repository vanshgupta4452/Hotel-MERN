import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../store/signupslice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignupSubmit = async (event) => {
    event.preventDefault(); // Prevent form refresh

    const userinfo = {
      email: email.current.value,
      password: password.current.value,
      name: name.current.value, // Fixed reference
    };

    try {
      const response = await axios.post("http://localhost:3000/user/signup", userinfo);
      console.log("Signup successful", response.data);
      
      dispatch(signup(userinfo));

      // Clear input fields
      email.current.value = "";
      password.current.value = "";
      name.current.value = "";
      navigate("/");
    } catch (error) {
      console.error("Signup failed", error.response?.data || error.message);
    }
  };

  return (
    <div className="modal modal-sheet position-static d-block p-4 py-md-5 login" tabIndex="-1" role="dialog" id="modalSignin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow login">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Signup</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body p-5 pt-0">
            <form onSubmit={handleSignupSubmit}>
              <div className="form-floating mb-3 text-color">
                <input type="text" className="form-control rounded-3" placeholder="Enter username" ref={name} />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3 text-color">
                <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" ref={email} />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3 text-color">
                <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" ref={password} />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
