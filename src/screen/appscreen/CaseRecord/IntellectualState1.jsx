import React, { useRef, useState } from "react";
import MentalSateItem from "../DiagramComponent/MentalSateItem";

export default function IntellectualState1() {
  return (
    <div
      
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "10px",
      }}
    >
      <div className="row">
        <div className="col-sm-7 col-6">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="chief_complaint.html">Chief Complaint</a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right"></i>
            </li>
            <li className="breadcrumb-item active">EMOTIONAL State</li>
          </ul>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-4 text-start">
            <h4 style={{ marginTop: "-10px" }}>CONSCIOUSNESS</h4>
          </div>
          <div className="col-4 text-center">
            <h4
              
              style={{ marginTop: "-10px", marginBottom: "40px" }}
            >
              DECISION
            </h4>
          </div>
          <div className="col-4 text-end">
            <h4 style={{ marginTop: "-10px" }}>CONFIDENCE</h4>
          </div>
          <div className="col-12">
            <svg
              width="100%"
              height="80"
              style={{
                position: "absolute",
                top: "60%",
                left: "0",
                transform: "translateY(-50%)",
              }}
            >
              
              
              <line
                x1="60%"
                y1="10"
                x2="83.3%"
                y2="10"
                stroke="black"
                strokeWidth="1"
               
              />
            </svg>
          </div>
        </div>
      </div>
      
      
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4">
            <svg width="100%" height="35">
              <line
                x1="5%"
                y1="1"
                x2="100%"
                y2="1"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="20"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="220"
                y1="0"
                x2="220"
                y2="20"
                stroke="black"
                strokeWidth="1"
              />
             
              <line
                x1="99.5%"
                y1="0"
                x2="99.5%"
                y2="20"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="col-md-4">
            
          </div>
          <div className="col-md-4">
            <svg width="100%" height="90" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="140"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                  DELIRIUM<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
           
            <div className="col-md-4">
              {" "}
              <div className="input-block local-forms">
                <label>
                  DULL<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="input-block local-forms">
                <label>
                  COMA<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  HASTY<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="40">
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="15"
                x2="90%"
                y2="15"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  PROCRASTINATION<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  POOR<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="40">
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="15"
                x2="90%"
                y2="15"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  ADEQUATE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>   
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                  ACUTE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
           
            <div className="col-md-4">
              {" "}
            
            </div>
            <div className="col-md-4">
              {" "}
                <div className="input-block local-forms">
                    <label>
                    STUPOR<span className="login-danger">*</span>
                    </label>
                    <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    required
                    />
                </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  OBSTINATE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  CHANGEABLE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  SHAKY<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  EXCESSIVE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>    
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
            <div className="col-md-4">
             
            </div>
           
            <div className="col-md-4">
              {" "}
            
            </div>
            <div className="col-md-4">
              {" "}
                <div className="input-block local-forms">
                    <label>
                    SOPOR<span className="login-danger">*</span>
                    </label>
                    <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    required
                    />
                </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  IMPULSIVE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
          <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              
              <line
                x1="5%"
                y1="80"
                x2="100%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="0%"
                y1="80"
                x2="50%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              
            </div>
          </div>
        </div>
      </div>  
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
            <div className="col-md-4">
             
            </div>
           
            <div className="col-md-4">
              {" "}
            
            </div>
            <div className="col-md-4">
              {" "}
               
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
          {" "}
              
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              {/* <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              /> */}
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
          <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              
              <line
                x1="5%"
                y1="80"
                x2="100%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="140" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="100"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="0%"
                y1="80"
                x2="50%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              
            </div>
          </div>
        </div>
      </div> 
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
            <div className="col-md-4">
             
            </div>
           
            <div className="col-md-4">
              {" "}
            
            </div>
            <div className="col-md-4">
              {" "}
                <div className="input-block local-forms">
                    <label>
                    ABSORBED<span className="login-danger">*</span>
                    </label>
                    <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    required
                    />
                </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
          {" "}
              <div className="input-block local-forms">
                <label>
                  CONTRADICTORY<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  IRRESOLUTE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  PERFECTIONIST<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  UNRELIABLE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>    
     
      <div className="container ">
        <div className="row position-relative">
        <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  PERFECTIONIST<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-55px"}}>
              
              
             
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  UNRELIABLE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
          {" "}
              <div className="input-block local-forms">
                <label>
                  COUNTRARY<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  INDECISIVE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  CENSORIOUS<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  APPRECIATIVE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className="container ">
        <div className="row position-relative">
        <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  RECOGNITION<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-55px"}}>
              
            <line
                x1="50%"
                y1="5"
                x2="50%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
             
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  TIME<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
          {" "}
              
            </div>
            <div className="col-md-2">
           
            </div>
        
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  GOLD-ORIENTED<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                PERSON-ORIENTED <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className="container ">
        <div className="row position-relative">
        <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  RESPONSE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-55px"}}>
              
            <line
                x1="50%"
                y1="5"
                x2="50%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
             
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  PERSONS<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
           
           </div>
          <div className="col-md-3">
          {" "}
          <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="80"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="50%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                  GOOD<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
        
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  TYRANT<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                WEEK <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="container ">
        <div className="row position-relative">
        <div className="col-md-4 d-flex">
          <div className="col-md-5">
              
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-55px"}}>
              
            <line
                x1="50%"
                y1="5"
                x2="50%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
             
              
              
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
             
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5" >
          <div className="input-block local-forms">
                <label>
                JUDGEMENT <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
           </div>
          <div className="col-md-3">
          {" "}
          <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="20"
                x2="50%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="10%"
                y1="80"
                x2="50%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-4">
              
            </div>
        
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
             
            </div>
            <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
             
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
        <div className="col-md-4 d-flex">
        <div className="col-md-2">
           
            </div>
            <div className="col-md-8">
            <div className="input-block local-forms">
                <label>
                  ORIENTATION<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
           
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5" >
          
           </div>
          <div className="col-md-3">
          {" "}
          <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="50%"
                y1="80"
                x2="90%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                  POOR<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
        
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-4">
              
            </div>
            <div className="col-md-5">
            <div className="input-block local-forms">
                <label>
                PERSON <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
              {" "}
            
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
        <div className="col-md-4 d-flex">
        <div className="col-md-2">
           
            </div>
            <div className="col-md-8">
         
            </div>
           
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5" >
          
           </div>
          <div className="col-md-3">
          {" "}
        
            </div>
            <div className="col-md-4">
              <div className="input-block local-forms">
              <svg width="100%" height="40" style={{marginTop:"-8px"}}>
              
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="140"
                stroke="black"
                strokeWidth="1"
              />
             
            </svg>
              </div>
            </div>
        
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-4">
              
            </div>
            <div className="col-md-5">
           
            </div>
            <div className="col-md-2">
              {" "}
            
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
        <div className="col-md-4 d-flex">
        <div className="col-md-2">
           
            </div>
            <div className="col-md-8">
         
            </div>
           
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5" >
          
           </div>
          <div className="col-md-2">
          {" "}
        
            </div>
            <div className="col-md-5">
            <div className="input-block local-forms">
                <label>
                MOTIVATION + WILL <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
        
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-4">
              
            </div>
            <div className="col-md-5">
           
            </div>
            <div className="col-md-2">
              {" "}
            
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
        <div className="col-md-4 d-flex">
        <div className="col-md-2">
           
            </div>
            <div className="col-md-8">
         
            </div>
           
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5" >
          
           </div>
          <div className="col-md-2">
          {" "}
        
            </div>
            <div className="col-md-5">
            <div className="input-block local-forms">
                <label>
                DRIVE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
        
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-4">
              
            </div>
            <div className="col-md-5">
           
            </div>
            <div className="col-md-2">
              {" "}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
