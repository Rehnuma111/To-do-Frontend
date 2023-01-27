import React from "react";
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../config";

const Login = () => {

  const navigate = useNavigate();
  const url = app_config.api_url;

  const loginForm = {
    email: "",
    password: "",
  };

  const loginSubmit = (formdata) => {
    console.log(formdata);
    const reqOPT = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/check-login", reqOPT).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have loggedin successfully!",
        })
        .then(() => {
          navigate("/todolist")
        })
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Email or password is incorrect!",
        })
        
      }
      return res.json();
    });
  };
  return (
    <div>
      <Formik initialValues={loginForm} onSubmit={loginSubmit}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <MDBContainer className="mt-4 ">
              <MDBCard>
                <MDBRow className="g-0">
                  <MDBCol md="6">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="rounded-start w-100 h-10"
                    />
                  </MDBCol>

                  <MDBCol md="6">
                    <MDBCardBody className="d-flex flex-column">
                      <div className="d-flex flex-row mt-5 ">
                        <MDBIcon
                          fas
                          icon="cubes fa-3x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>

                      <h5
                        className="fw-normal my-4 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      <label>Email address</label>
                      <MDBInput
                        wrapperClass="mb-4"
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <label>Password</label>
                      <MDBInput
                        wrapperClass="mb-4"
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                      />

                      <button
                        className="btn btn-primary mb-4 px-5"
                        type="submit"
                        color="dark"
                        size="lg"
                      >
                        Login
                      </button>
                      <p className="mb-5 " style={{ color: "#393f81" }}>
                        Don't have an account?
                        <NavLink to="/signup" style={{ color: "#393f81" }}>
                          Register here
                        </NavLink>
                      </p>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBContainer>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
