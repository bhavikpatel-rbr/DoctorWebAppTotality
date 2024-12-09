import React, { useRef, useState } from "react";
import MentalSateItem from "../DiagramComponent/MentalSateItem";

export default function IntellectualState() {
  return (
    <div
      className="content"
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
            <h4 style={{ marginTop: "-10px" }}>CAPACITY</h4>
          </div>
          <div className="col-4 text-center">
            <h2
              className="btn btn-primary"
              style={{ marginTop: "-20px", marginBottom: "40px" }}
            >
              2.INTELLECTUAL STATE
            </h2>
          </div>
          <div className="col-4 text-end">
            <h4 style={{ marginTop: "-10px" }}>PERFORMANCE</h4>
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
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                </marker>
              </defs>
              <line
                x1="40%"
                y1="5"
                x2="120"
                y2="5"
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1="60%"
                y1="5"
                x2="85%"
                y2="5"
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrowhead)"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-4 text-start"></div>
          <div className="col-4 text-center">
            <h4 style={{ marginTop: "-20px", marginBottom: "40px" }}>
              (FORMULATION)
            </h4>
          </div>
          <div className="col-4 text-end"></div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4">
            <div className="input-block local-forms">
              <label>
                PERCEPTION<span className="login-danger">*</span>
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
            <div className="input-block local-forms">
              <label>
                MEMORY<span className="login-danger">*</span>
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
            <div className="input-block local-forms">
              <label>
                THINKING<span className="login-danger">*</span>
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
                x1="140"
                y1="0"
                x2="140"
                y2="20"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="240"
                y1="0"
                x2="240"
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
            <svg width="100%" height="35">
              <line
                x1="10"
                y1="1"
                x2="100%"
                y2="1"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="2%"
                y1="0"
                x2="2%"
                y2="30"
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
                y2="30"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="col-md-4">
            <svg width="100%" height="35">
              <line
                x1="10"
                y1="1"
                x2="100%"
                y2="1"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="2%"
                y1="0"
                x2="2%"
                y2="30"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="40"
                stroke="black"
                strokeWidth="1"
              />
              
              <line
                x1="99.5%"
                y1="0"
                x2="99.5%"
                y2="30"
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
            <div className="col-md-3">
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
            <div className="col-md-3">
              <div className="input-block local-forms">
                <label>
                  CLEAR<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                  CONFFUCED<span className="login-danger">*</span>
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
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                  LOSS<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                  WEEK<span className="login-danger">*</span>
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
                  SHARP<span className="login-danger">*</span>
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
                  CLEAR<span className="login-danger">*</span>
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
                  CONFFUCED<span className="login-danger">*</span>
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
                  ECSTASY<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                  ALTERED<span className="login-danger">*</span>
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
           
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                  IMMEDIATE<span className="login-danger">*</span>
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
              
            </div>
            <div className="col-md-4">
              {" "}
              
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  EMOTIONAL<span className="login-danger">*</span>
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
                  LOGICAL<span className="login-danger">*</span>
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
                  CLAIRVOVANCE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-">
            <svg width="100%" height="100" style={{marginTop:"-58px"}}>
              
              
              <line
                x1="22.5%"
                y1="30"
                x2="22.5%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
            </div>
           
           
            
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                  RECENT<span className="login-danger">*</span>
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
              
            </div>
            <div className="col-md-4">
              {" "}
              
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  FANCIES<span className="login-danger">*</span>
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
                  DIFFICULT<span className="login-danger">*</span>
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
                  VISIONS<span className="login-danger">*</span>
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
            <svg width="100%" height="100" style={{marginTop:"-65px"}}>
              
              
              <line
                x1="60%"
                y1="30"
                x2="60%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="100%"
                y1="80"
                x2="60%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  HALLUCINATION<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                  REMOTE<span className="login-danger">*</span>
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
              
            </div>
            <div className="col-md-4">
              {" "}
              
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  REVERY<span className="login-danger">*</span>
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
                  SYSTEMATIC<span className="login-danger">*</span>
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
                  STARTS<span className="login-danger">*</span>
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
            <svg width="100%" height="100" style={{marginTop:"-65px"}}>
              
              
              <line
                x1="60%"
                y1="25"
                x2="60%"
                y2="79"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="100%"
                y1="80"
                x2="60%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  ILLUSIONS<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                  PATCHY<span className="login-danger">*</span>
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
              
            </div>
            <div className="col-md-4">
              {" "}
              
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  ABUNDANT<span className="login-danger">*</span>
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
                  PATCHY<span className="login-danger">*</span>
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
          
            <div className="col-md-3">
            <svg width="100%" height="100" style={{marginTop:"-55px"}}>
              
              
              <line
                x1="60%"
                y1="25"
                x2="60%"
                y2="79"
                stroke="black"
                strokeWidth="1"
              />
             
            </svg>
            </div>
           
           
            
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                  TRANSIENT<span className="login-danger">*</span>
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
              
            </div>
            <div className="col-md-4">
              {" "}
              
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  FIXED<span className="login-danger">*</span>
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
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
          
            <div className="col-md-3">
            <svg width="100%" height="100" style={{marginTop:"-80px"}}>
              
              
              <line
                x1="60%"
                y1="25"
                x2="60%"
                y2="120"
                stroke="black"
                strokeWidth="1"
              />
             
            </svg>
            </div>
           
           
            
          </div>
          <div className="col-md-4 d-flex">
         
            <div className="col-md-4">
              
            </div>
            <div className="col-md-4">
              {" "}
              
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
              <div className="input-block local-forms">
                <label>
                  GRANDIOSE / UNREAL<span className="login-danger">*</span>
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
                  PROGMATIC<span className="login-danger">*</span>
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
          
            <div className="col-md-3">
            <svg width="100%" height="100" style={{marginTop:"-80px"}}>
              
              
              <line
                x1="60%"
                y1="25"
                x2="60%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="60%"
                y1="80"
                x2="100%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
             
            </svg>
            </div>
            <div className="col-md-9">
            <svg width="100%" height="100" style={{marginTop:"-80px"}}>
              
              
             
              <line
                x1="0%"
                y1="80"
                x2="100%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
             
            </svg>
            </div>
           
            
          </div>
          <div className="col-md-4 d-flex">
         
          <div className="col-md-2">
            <svg width="100%" height="100" style={{marginTop:"-80px",marginLeft:"-24px"}}>
              
              
             
              <line
                x1="0%"
                y1="80"
                x2="100%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
             
            </svg>
            </div>
            <div className="col-md-8" style={{marginTop:"-20px"}}>
            
              
              
             
            <div className="input-block local-forms">
                <label>
                  DELUSIONS<span className="login-danger">*</span>
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
            <svg width="100%" height="100" style={{marginTop:"-80px",}}>
              
              
             
              <line
                x1="50%"
                y1="80"
                x2="100%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
             
            </svg>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-8">
          <svg width="100%" height="100" style={{marginTop:"-80px" , marginLeft:"-24px"}}>
              
          <line
                x1="83.7%"
                y1="44"
                x2="83.7%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
             
              <line
                x1="0%"
                y1="80"
                x2="84%"
                y2="80"
                stroke="black"
                strokeWidth="1"
              />
             
            </svg>
            </div>
          
           
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
          
            
           
            
          </div>
          <div className="col-md-4 d-flex">
         
          <div className="col-md-2">
           
            </div>
            <div className="col-md-8" style={{marginTop:"-20px"}}>
            
              
              
             
            <div className="input-block local-forms">
                <h3 style={{textAlign:"center"}}>+</h3>
              </div>
             
            
            </div>
            <div className="col-md-2">
            
            </div>
          </div>
          <div className="col-md-4 d-flex">
         
          
           
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
          
            
           
            
          </div>
          <div className="col-md-4 d-flex">
         
          <div className="col-md-2">
           
            </div>
            <div className="col-md-8" style={{marginTop:"-20px"}}>
            
              
              
             
            <div className="input-block local-forms">
                <label>
                  IMAGINATIONS<span className="login-danger">*</span>
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
            
            </div>
          </div>
          <div className="col-md-4 d-flex">
         
          
           
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
          
            
           
            
          </div>
          <div className="col-md-4 d-flex">
         
          <div className="col-md-2">
           
            </div>
            <div className="col-md-8" style={{marginTop:"-20px"}}>
            
              
              
             
            <div className="input-block local-forms">
                <label>
                  PERSECUTIONS<span className="login-danger">*</span>
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
            
            </div>
          </div>
          <div className="col-md-4 d-flex">
         
          
           
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
          
            
           
            
          </div>
          <div className="col-md-4 d-flex">
         
          <div className="col-md-2">
           
            </div>
            <div className="col-md-8" style={{marginTop:"-20px"}}>
            
              
              
             
            <div className="input-block local-forms">
                <h3 style={{textAlign:"center"}}>|</h3>
              </div>
             
            
            </div>
            <div className="col-md-2">
            
            </div>
          </div>
          <div className="col-md-4 d-flex">
         
          
           
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
          
            
           
            
          </div>
          <div className="col-md-4 d-flex">
         
          <div className="col-md-2">
           
            </div>
            <div className="col-md-8" style={{marginTop:"-20px"}}>
            
              
              
             
            <div className="input-block local-forms">
                <label>
                  ACTION<span className="login-danger">*</span>
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
            
            </div>
          </div>
          <div className="col-md-4 d-flex">
         
          
           
          </div>
        </div>
      </div>
    </div>
  );
}
