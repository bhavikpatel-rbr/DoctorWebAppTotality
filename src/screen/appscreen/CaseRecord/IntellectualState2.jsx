import React, { useRef, useState } from "react";
import MentalSateItem from "../DiagramComponent/MentalSateItem";

export default function IntellectualState2() {
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
          <div className="col-3 text-start">
            <h4 style={{ marginTop: "-10px" }}>PRECOCITY</h4>
          </div>
          <div className="col-3 text-start">
            <h4 style={{ marginTop: "-10px" }}>PERFORMANCE</h4>
          </div>
          <div className="col-3 text-center">
            <h4
              
              style={{ marginTop: "-10px", marginBottom: "40px" }}
            >
              LATE
            </h4>
          </div>
          <div className="col-3 text-end">
            <h4 style={{ marginTop: "-10px" }}>SENILITY</h4>
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
                x1="10%"
                y1="10"
                x2="25%"
                y2="10"
                stroke="black"
                strokeWidth="1"
               
              />
              <line
                x1="38%"
                y1="10"
                x2="58%"
                y2="10"
                stroke="black"
                strokeWidth="1"
               
              />
              
              <line
                x1="65%"
                y1="10"
                x2="90%"
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
          <div className="col-md-2">
          
          </div>
          <div className="col-md-6">
          <svg width="100%" height="130" style={{marginTop:"-51px"}}>
              
              
              <line
                x1="30%"
                y1="25"
                x2="30%"
                y2="115"
                stroke="black"
                strokeWidth="1"
              />
              
            </svg>
          </div>
          <div className="col-md-4">
           
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row position-relative">
          <div className="col-md-4 d-flex">
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                  SCHOLASTIC<span className="login-danger">*</span>
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
             
            </div>
          </div>
          <div className="col-md-4 d-flex" style={{marginTop:"-30px"}}>
          
            <div className="col-md-2">
            <svg width="100%" height="40" style={{marginLeft:"-30px"}}>
              
              
             
              <line
                x1="0%"
                y1="15"
                x2="100%"
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
                  BLOCKS<span className="login-danger">*</span>
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
                  SPORTS<span className="login-danger">*</span>
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
                  ATHLETIC<span className="login-danger">*</span>
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
            <svg width="100%" height="120" style={{marginTop:"-45px"}}>
            <line
                x1="60%"
                y1="20"
                x2="60%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
             
              <line
                x1="60%"
                y1="70"
                x2="100%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                  MOTIVATIONAL<span className="login-danger">*</span>
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
                  ARTISTIC<span className="login-danger">*</span>
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
          </div>
          <div className="col-md-4 d-flex">
          
            <div className="col-md-4">
            <svg width="100%" height="125" style={{marginTop:"-45px"}}>
            <line
                x1="60%"
                y1="20"
                x2="60%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
             
              <line
                x1="60%"
                y1="70"
                x2="100%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                INTELLECTUAL<span className="login-danger">*</span>
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
                  FAMILY<span className="login-danger">*</span>
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
          </div>
          <div className="col-md-4 d-flex">
          
            <div className="col-md-4">
            <svg width="100%" height="125" style={{marginTop:"-45px"}}>
            <line
                x1="60%"
                y1="20"
                x2="60%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
             
              <line
                x1="60%"
                y1="70"
                x2="100%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                OPPORTUNITY<span className="login-danger">*</span>
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
                  MARITAL<span className="login-danger">*</span>
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
          </div>
          <div className="col-md-4 d-flex">
          
            <div className="col-md-4">
            <svg width="100%" height="125" style={{marginTop:"-45px"}}>
            <line
                x1="60%"
                y1="20"
                x2="60%"
                y2="100"
                stroke="black"
                strokeWidth="1"
              />
              
             
              <line
                x1="60%"
                y1="70"
                x2="100%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
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
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
             
            </div>
            <div className="col-md-2">
            
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
                  SOCIAL<span className="login-danger">*</span>
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
          </div>
          <div className="col-md-4 d-flex">
          
            <div className="col-md-4">
            <svg width="100%" height="125" style={{marginTop:"-45px"}}>
            <line
                x1="60%"
                y1="20"
                x2="60%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
             
              <line
                x1="60%"
                y1="70"
                x2="100%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                INTER-PERSONAL<span className="login-danger">*</span>
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
                  RELIGIOUS<span className="login-danger">*</span>
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
          </div>
          <div className="col-md-4 d-flex">
          
            <div className="col-md-4">
            
            </div>
            <div className="col-md-5">
              {" "}
              
            </div>
          </div>
          <div className="col-md-4 d-flex">
          <div className="col-md-5">
             
            </div>
            <div className="col-md-2">
            
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
                  WORK<span className="login-danger">*</span>
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
          </div>
          <div className="col-md-4 d-flex">
          
            <div className="col-md-2">
            <svg width="100%" height="125" style={{marginTop:"-45px"}}>
            <line
                x1="60%"
                y1="70"
                x2="60%"
                y2="120"
                stroke="black"
                strokeWidth="1"
              />
              
             
              <line
                x1="60%"
                y1="70"
                x2="100%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                EFFICIENCY<span className="login-danger">*</span>
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
             
            </div>
          </div>
          <div className="col-md-4 d-flex">
          
            <div className="col-md-2">
            <svg width="100%" height="125" style={{marginTop:"-45px"}}>
            <line
                x1="60%"
                y1="0"
                x2="60%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
              
             
              <line
                x1="60%"
                y1="70"
                x2="100%"
                y2="70"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
            </div>
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                SATISFACTION<span className="login-danger">*</span>
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
                PROBLEMS<span className="login-danger">*</span>
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
            <div className="col-md-5">
            <div className="input-block local-forms">
                <label>
                ADJUSTMENT<span className="login-danger">*</span>
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
                CONSCINCE<span className="login-danger">*</span>
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
         
          
            <div className="col-md-5">
              {" "}
              <div className="input-block local-forms">
                <label>
                POSITION<span className="login-danger">*</span>
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
            
            </div>
          
          </div>
        </div>
      </div>   
      
      
        
     
      
    </div>
  );
}
