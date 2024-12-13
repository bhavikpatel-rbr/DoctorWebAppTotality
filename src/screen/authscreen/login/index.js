import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import login from './img/login-02.png';
import './../../../assest/commoncss.css';
import { loginAdminByEmailAction } from '../../../reduxtool/auth/middleware';

const Login = () => {
  const dispatch = useDispatch();
  const passwordRef = useRef(null);
  const loginButtonRef = useRef(null);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <div className="main-wrapper login-body">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-6 login-wrap">
            <div className="login-sec">
              <div className="log-img">
                <img className="img-fluid" src={login} alt="Doctor" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="login-right">
                  <div className="login-right-wrap">
                    <h2>Login</h2>

                    <Formik
                      initialValues={{ email: '', password: '' }}
                      validationSchema={validationSchema}
                      onSubmit={(values) => {
                        dispatch(loginAdminByEmailAction(values));
                      }}
                    >
                      {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                          <div className="input-block">
                            <label htmlFor="email">Email <span className="login-danger">*</span></label>
                            <Field
                              id="email"
                              name="email"
                              type="text"
                              className="form-control"
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                  passwordRef.current.focus();
                                }
                              }}
                            />
                            <ErrorMessage name="email" component="div" className="login-danger" />
                          </div>
                          <div className="input-block">
                            <label htmlFor="password">Password <span className="login-danger">*</span></label>
                            <Field
                              id="password"
                              name="password"
                              type="password"
                              className="form-control pass-input"
                              innerRef={passwordRef}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                  loginButtonRef.current.click();
                                }
                              }}
                            />
                            <ErrorMessage name="password" component="div" className="login-danger" />
                          </div>
                          <div className="input-block login-btn">
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                              ref={loginButtonRef}
                            >
                              Login
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                   
                    <div className="next-sign">
                      <p className="account-subtitle">Need an account? <Link to="/signup">Sign Up</Link></p>
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
}

export default Login;
