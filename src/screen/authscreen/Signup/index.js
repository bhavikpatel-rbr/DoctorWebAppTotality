import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import login from "./img/login-02.png";
import "./../../../assest/commoncss.css";
import { useDispatch } from "react-redux";
import { registerAdminByEmailAction } from "../../../reduxtool/auth/middleware";

const SignUp = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .min(3, "Full Name must be at least 3 characters long")
      .max(50, "Full Name cannot exceed 50 characters")
      .matches(/^[a-zA-Z\s]+$/, "Full Name can only contain letters and spaces")
      .required("Full Name is required"),
    
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .max(20, "Password cannot exceed 20 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)")
      .required("Password is required"),
      

    phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Confirm Password is required"),
    
    agreeToTerms: Yup.bool()
      .oneOf([true], "You must accept the Terms and Privacy Policy")
      .required("You must accept the Terms and Privacy Policy"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(
      registerAdminByEmailAction({
        username: values.username,
        email: values.email,
        phone: values.phone,
        password: values.password,    
        group_id: 6,
      })
    );        
  };

  return (
    <div className="main-wrapper login-body">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-6 login-wrap">
            <div className="login-sec">
              <div className="log-img">
                <img className="img-fluid" src={login} alt="Logo" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="login-right">
                  <div className="login-right-wrap">
                    <h2>Getting Started</h2>
                    <Formik
                      initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        agreeToTerms: false,
                      }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div className="input-block">
                            <label htmlFor="username">
                              Full Name <span className="login-danger">*</span>
                            </label>
                            <Field
                              id="username"
                              name="username"
                              className={`form-control ${
                                errors.username && touched.username
                                  ? "is-invalid"
                                  : ""
                              }`}
                              type="text"
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="input-block">
                            <label htmlFor="email">
                              Email <span className="login-danger">*</span>
                            </label>
                            <Field
                              id="email"
                              name="email"
                              className={`form-control ${
                                errors.email && touched.email
                                  ? "is-invalid"
                                  : ""
                              }`}
                              type="text"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="input-block">
  <label htmlFor="phone">
    Phone <span className="login-danger">*</span>
  </label>
  <Field
    id="phone"
    name="phone"
    className={`form-control ${errors.phone && touched.phone ? "is-invalid" : ""}`}
    type="text"
  />
  <ErrorMessage name="phone" component="div" className="invalid-feedback" />
</div>

                          <div className="input-block">
                            <label htmlFor="password">
                              Password <span className="login-danger">*</span>
                            </label>
                            <Field
                              id="password"
                              name="password"
                              className={`form-control ${
                                errors.password && touched.password
                                  ? "is-invalid"
                                  : ""
                              }`}
                              type="password"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="input-block">
                            <label htmlFor="confirmPassword">
                              Confirm Password{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <Field
                              id="confirmPassword"
                              name="confirmPassword"
                              className={`form-control ${
                                errors.confirmPassword &&
                                touched.confirmPassword
                                  ? "is-invalid"
                                  : ""
                              }`}
                              type="password"
                            />
                            <ErrorMessage
                              name="confirmPassword"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="forgotpass">
  <div className="remember-me">
    <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
      I agree to the &nbsp;terms of service&nbsp;and&nbsp;privacy policy&nbsp;
      <Field
        type="checkbox"
        name="agreeToTerms"
        className={errors.agreeToTerms && touched.agreeToTerms ? "is-invalid" : ""}
      />
      <span className="checkmark"></span>
    </label>
    <ErrorMessage name="agreeToTerms" component="div" className="invalid-feedback" />
  </div>
</div>

                          <div className="input-block login-btn">
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              Sign up
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>

                    <div className="next-sign">
                      <p className="account-subtitle">
                        Already have an account? <Link to="/login">Login</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
