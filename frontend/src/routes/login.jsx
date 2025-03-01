import React, { useRef } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const Login = () => {

  const email = useRef();
  const password = useRef();
 
  const navigate = useNavigate();


  const handleloginSubmit = async (event) => {
    event.preventDefault(); // Prevent form refresh

    const userinfo = {
      email: email.current.value,
      password: password.current.value,
   
    };

    try {
      const response = await axios.post("http://localhost:3000/user/login", userinfo, {
        withCredentials: true, 
      });
      console.log("Signup successful", response.data);
      


      // Clear input fields
      email.current.value = "";
      password.current.value = "";
   
      navigate("/");
    } catch (error) {
      console.error("Signup failed", error.response?.data || error.message);
    }
  };

  return (
    <div
      class="modal modal-sheet position-static d-block  p-4 py-md-5 login"
      tabindex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow login">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h1 class="fw-bold mb-0 fs-2">Login</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body p-5 pt-0">
            <form onSubmit={handleloginSubmit}>
              <div class="form-floating mb-3 text-color">
                <input
                  type="email"
                  class="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                  ref={email}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3 text-color">
                <input
                  type="password"
                  class="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                  ref={password}
                />
                <label for="floatingPassword">Password</label>
              </div>
              <button
                class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                Login
              </button>
              <small class="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
