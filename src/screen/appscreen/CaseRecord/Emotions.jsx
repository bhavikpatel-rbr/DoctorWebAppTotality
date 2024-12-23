import React, { useRef, useState } from "react";
import MentalSateItem from "../DiagramComponent/MentalSateItem";

export default function Emotions() {
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
              <div href="chief_complaint.html">Chief Complaint</div>
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
            
          </div>
          <div className="col-4 text-center">
            <h4
              
              style={{ marginTop: "-10px", marginBottom: "40px" }}
            >
              EMOTIONS
            </h4>
          </div>
          <div className="col-4 text-end">
           
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
                x1="1.3%"
                y1="10"
                x2="45%"
                y2="10"
                stroke="black"
                strokeWidth="1"
               
              />
              
              <line
                x1="55%"
                y1="10"
                x2="98.8%"
                y2="10"
                stroke="black"
                strokeWidth="1"
               
              />
            </svg>
          </div>
        </div>
      </div>
      
      
      {/* <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1">
          <svg width="100%" height="100" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
          </div>
          <div className="col-md-10 d-flex">
             <div className="col-md-5">
                
             </div>
             <div className="col-md-2">
             <svg width="100%" height="100" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="99%"
                y1="30"
                x2="99%"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-5"></div>
          </div>
          <div className="col-md-1">
          <svg width="100%" height="100" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
          </div>
        </div>
      </div> */}
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1" style={{marginTop:"-52px"}}>
          <svg width="100%" height="100"  >
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="5%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
          <div className="col-md-10 d-flex" style={{marginLeft:"-90px"}} >
          <div className="col-md-5 d-flex " style={{marginLeft:"10px"}}>
             <div className="col-md-4">
             <div className="input-block local-forms">
                <label>
                  Anger<span className="login-danger">*</span>
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
                  EXCITEMENT<span className="login-danger">*</span>
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
                  JOY<span className="login-danger">*</span>
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
                  VEXATION<span className="login-danger">*</span>
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
             <div className="col-md-2" >
             <svg width="100%" height="100" style={{marginTop:"-10px"}}>
              
              
              <line
                x1="99%"
                y1="0"
                x2="99%"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-5 d-flex " style={{marginLeft:"20px"}}>
             <div className="col-md-3">
            
                </div>
                <div className="col-md-3">
              
                </div>
                <div className="col-md-6">
                <div className="input-block local-forms">
                <label>
                  DISAPPOINTMENT<span className="login-danger">*</span>
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
                  Love<span className="login-danger">*</span>
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
          <div className="col-md-1"style={{marginTop:"-52px", marginLeft:"90px"}} >
          <svg width="100%" height="100" >
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              <line
                x1="98%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1" style={{marginTop:"-52px"}}>
          <svg width="100%" height="100"  >
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="5%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
          <div className="col-md-10 d-flex" style={{marginLeft:"-90px"}} >
          <div className="col-md-5 d-flex " style={{marginLeft:"10px"}}>
             <div className="col-md-4">
             <div className="input-block local-forms">
                <label>
                  ENVY<span className="login-danger">*</span>
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
                  JEALOUSY<span className="login-danger">*</span>
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
                  HATRED<span className="login-danger">*</span>
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
             <div className="col-md-2" >
             <svg width="100%" height="100" style={{marginTop:"-50px"}}>
              
              
              <line
                x1="99%"
                y1="0"
                x2="99%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-5 d-flex " style={{marginLeft:"20px"}}>
             <div className="col-md-3">
            
                </div>
                <div className="col-md-3">
                <div className="input-block local-forms">
                <label>
                  GRIEF<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-6">
                <div className="input-block local-forms">
                <label>
                  LOSS-LOVE OBJECT<span className="login-danger">*</span>
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
                  SORROW<span className="login-danger">*</span>
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
          <div className="col-md-1"style={{marginTop:"-52px", marginLeft:"90px"}} >
          <svg width="100%" height="100" >
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              <line
                x1="98%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1" style={{marginTop:"-52px"}}>
          <svg width="100%" height="100"  >
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="5%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
          <div className="col-md-10 d-flex" style={{marginLeft:"-90px"}} >
          <div className="col-md-5 d-flex " style={{marginLeft:"10px"}}>
             <div className="col-md-4">
             <div className="input-block local-forms">
                <label>
                  CONTRADISCTION<span className="login-danger">*</span>
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
               
                </div>
                <div className="col-md-4">
              
                </div>
             </div>
             <div className="col-md-2" >
             <svg width="100%" height="100" style={{marginTop:"-50px"}}>
              
              
              <line
                x1="99%"
                y1="0"
                x2="99%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-5 d-flex " style={{marginLeft:"20px"}}>
             <div className="col-md-4">
            
                </div>
                <div className="col-md-4">
                <div className="input-block local-forms">
                <label>
                  BROODING<span className="login-danger">*</span>
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
                  PAST<span className="login-danger">*</span>
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
                  SELF-PITY<span className="login-danger">*</span>
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
          <div className="col-md-1"style={{marginTop:"-52px", marginLeft:"90px"}} >
          <svg width="100%" height="100" >
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              <line
                x1="98%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1" style={{marginTop:"-52px"}}>
          <svg width="100%" height="100"  >
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="5%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
          <div className="col-md-10 d-flex" style={{marginLeft:"-90px"}} >
          <div className="col-md-5 d-flex " style={{marginLeft:"10px"}}>
             <div className="col-md-4">
             <div className="input-block local-forms">
                <label>
                  ANTICIPATION<span className="login-danger">*</span>
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
                  ANXIETY<span className="login-danger">*</span>
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
                  APPROACH<span className="login-danger">*</span>
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
                  BAD NEWS<span className="login-danger">*</span>
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
             <div className="col-md-2" >
             <svg width="100%" height="100" style={{marginTop:"-50px"}}>
              
              
              <line
                x1="99%"
                y1="0"
                x2="99%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-5 d-flex " style={{marginLeft:"20px"}}>
             <div className="col-md-4">
            
                </div>
                <div className="col-md-4">
                <div className="input-block local-forms">
                <label>
                  COMPANY<span className="login-danger">*</span>
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
                  CONSOLATION<span className="login-danger">*</span>
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
                  WEEPING<span className="login-danger">*</span>
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
          <div className="col-md-1"style={{marginTop:"-52px", marginLeft:"90px"}} >
          <svg width="100%" height="100" >
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              <line
                x1="98%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1" style={{marginTop:"-52px"}}>
          <svg width="100%" height="100"  >
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="5%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
          <div className="col-md-10 d-flex" style={{marginLeft:"-90px"}} >
          <div className="col-md-5 d-flex " style={{marginLeft:"10px"}}>
             <div className="col-md-4">
             <div className="input-block local-forms">
                <label>
                  CHARGRIN<span className="login-danger">*</span>
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
                  FRET<span className="login-danger">*</span>
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
                  REPPROACH<span className="login-danger">*</span>
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
                 SCORN<span className="login-danger">*</span>
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
             <div className="col-md-2" >
             <svg width="100%" height="100" style={{marginTop:"-50px"}}>
              
              
              <line
                x1="99%"
                y1="0"
                x2="99%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-5 d-flex " style={{marginLeft:"20px"}}>
            
                <div className="col-md-4">
                <div className="input-block local-forms">
                <label>
                  FEAR<span className="login-danger">*</span>
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
                  FRIGHT<span className="login-danger">*</span>
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
                  SHOCK<span className="login-danger">*</span>
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
                  WORRY<span className="login-danger">*</span>
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
          <div className="col-md-1"style={{marginTop:"-52px", marginLeft:"90px"}} >
          <svg width="100%" height="100" >
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              <line
                x1="98%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1" style={{marginTop:"-52px"}}>
          <svg width="100%" height="100"  >
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="5%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
          <div className="col-md-10 d-flex" style={{marginLeft:"-90px"}} >
          <div className="col-md-5 d-flex " style={{marginLeft:"10px"}}>
             <div className="col-md-5">
             <div className="input-block local-forms">
                <label>
                  ADMONITION<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-5">
                <div className="input-block local-forms">
                <label>
                  INSULTS<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-5">
                <div className="input-block local-forms">
                <label>
                  MORTIFICATION<span className="login-danger">*</span>
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
             <div className="col-md-2" >
             <svg width="100%" height="100" style={{marginTop:"-50px"}}>
              
              
              <line
                x1="99%"
                y1="0"
                x2="99%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-5 d-flex " style={{marginLeft:"20px"}}>
            
                <div className="col-md-4">
                <div className="input-block local-forms">
                <label>
                  ACTON<span className="login-danger">*</span>
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
                  CARRIED<span className="login-danger">*</span>
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
                  LOOKED<span className="login-danger">*</span>
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
                  MOTION<span className="login-danger">*</span>
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
          <div className="col-md-1"style={{marginTop:"-52px", marginLeft:"90px"}} >
          <svg width="100%" height="100" >
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              <line
                x1="98%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1" style={{marginTop:"-52px"}}>
          <svg width="100%" height="100"  >
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="5%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
          <div className="col-md-10 d-flex" style={{marginLeft:"-90px"}} >
          <div className="col-md-5 d-flex " style={{marginLeft:"10px"}}>
             <div className="col-md-5">
             <div className="input-block local-forms">
                <label>
                  REPRESSION<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-5">
               
                </div>
                <div className="col-md-5">
                
                </div>
                
             </div>
             <div className="col-md-2" >
             <svg width="100%" height="100" style={{marginTop:"-50px"}}>
              
              
              <line
                x1="99%"
                y1="0"
                x2="99%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-5 d-flex " style={{marginLeft:"20px"}}>
            
                <div className="col-md-4">
                <div className="input-block local-forms">
                <label>
                  MOVEMENT<span className="login-danger">*</span>
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
                  ROCKED<span className="login-danger">*</span>
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
                  TOUCHED<span className="login-danger">*</span>
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
                  WALKING<span className="login-danger">*</span>
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
          <div className="col-md-1"style={{marginTop:"-52px", marginLeft:"90px"}} >
          <svg width="100%" height="100" >
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              <line
                x1="98%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-1" style={{marginTop:"-52px"}}>
          <svg width="100%" height="100"  >
              
              
              <line
                x1="5%"
                y1="0"
                x2="5%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="5%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
          <div className="col-md-10 d-flex" style={{marginLeft:"-90px"}} >
          <div className="col-md-5 d-flex " style={{marginLeft:"10px"}}>
             <div className="col-md-5">
             <div className="input-block local-forms">
                <label>
                  INSECURITY<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-5">
                <div className="input-block local-forms">
                <label>
                  THREAT<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
                </div>
                <div className="col-md-5">
                
                </div>
                
             </div>
             <div className="col-md-2" >
             <svg width="100%" height="100" style={{marginTop:"-50px"}}>
              
              
              <line
                x1="99%"
                y1="0"
                x2="99%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              
            </svg>
             </div>
             <div className="col-md-5 d-flex " style={{marginLeft:"20px"}}>
             <div className="col-md-4">
               
               </div>
                <div className="col-md-4">
                <div className="input-block local-forms">
                <label>
                  NARRATING<span className="login-danger">*</span>
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
                  ALONE<span className="login-danger">*</span>
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
                  WHEN<span className="login-danger">*</span>
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
          <div className="col-md-1"style={{marginTop:"-52px", marginLeft:"90px"}} >
          <svg width="100%" height="100" >
              
              
              <line
                x1="98%"
                y1="0"
                x2="98%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
              <line
                x1="98%"
                y1="70"
                x2="50%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-6" style={{marginTop:"-28px"}}>
          <svg width="110%" height="100"  >
              
              
              <line
                x1="0.7%"
                y1="0"
                x2="0.7%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
               <line
                x1="0.7%"
                y1="70"
                x2="100%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
         
          <div className="col-md-6"style={{marginTop:"-28px", }} >
          <svg width="100%" height="100" >
              
              
              <line
                x1="99.62%"
                y1="0"
                x2="99.62%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
              <line
                x1="99.62%"
                y1="70"
                x2="0%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      
      
      
        
     
      
    </div>
  );
}
