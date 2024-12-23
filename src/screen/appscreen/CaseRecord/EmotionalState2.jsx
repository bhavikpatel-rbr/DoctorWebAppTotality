import React, { useState } from "react";
import MentalSateItem from "../DiagramComponent/MentalSateItem";
import { Link } from "react-router-dom";

export default function EmotionalState2() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [keyword, setKeyword] = useState("");
  const [value, setValue] = useState("");
  const [savedItems, setSavedItems] = useState([]);

  const handleSave = () => {
    setSavedItems([...savedItems, { title: selectedTitle, keyword, value }]);
    setIsShowModal(false);
    setKeyword("");
    setValue("");
  };

  return (
    <div
      
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
     <div className="row">
        <div className="col-sm-6 col-6">
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
        <div className="col-sm-6 col-6 justify-content-end" >
        <nav>
                <ul className="pagination justify-content-end" >
                 
                   
                <Link
      className="page-link"
      to="/emotionalstate"
      style={{
        border: '1px solid #2e37a4',
        color: '#2e37a4',
        backgroundColor: '#fff',
        borderRadius: '4px',
        padding: '6px 12px',
        cursor: 'pointer',
      }}
    >
      {1}
    </Link>
    <Link
      className="page-link"
      to="/emotionalstate2"
      style={{
        border: '1px solid #2e37a4',
        color: '#2e37a4',
        backgroundColor: '#fff',
        borderRadius: '4px',
        padding: '6px 12px',
        cursor: 'pointer',
        marginLeft:"10px",
        marginRight:"10px"
      }}
    >
      {2}
    </Link>
    <Link
      className="page-link"
      to="/emotionalstate3"
      style={{
        border: '1px solid #2e37a4',
        color: '#2e37a4',
        backgroundColor: '#fff',
        borderRadius: '4px',
        padding: '6px 12px',
        cursor: 'pointer',
        
      }}
    >
      {3}
    </Link>
                    
                  
                </ul>
              </nav>
        </div>
        
      </div>
      <div
        className=""
        style={{
          marginTop: "30px",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        
        
       <div className="container ">
  <div className="row position-relative">
    <div className="col-4 text-start">
      <h4 style={{ marginTop:"-10px" }}>LOVE</h4>
    </div>
    <div className="col-4 text-center">
      <h2 className="btn btn-primary" style={{ marginTop:"-20px" , marginBottom:"40px"}}>OBJECTS</h2>
    </div>
    <div className="col-4 text-end">
      <h4 style={{ marginTop:"-10px" }}>HATE</h4>
    </div>
    <div className="col-12">
      <svg width="100%" height="80" style={{ position: 'absolute', top: '60%', left: '0', transform: 'translateY(-50%)' }}>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>
        </defs>
        <line x1="44%" y1="5" x2="75" y2="5" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <line x1="56%" y1="5" x2="92%" y2="5" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <line x1="50%" y1="33" x2="75" y2="30" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <line x1="49%" y1="33" x2="92%" y2="30" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
        
      </svg>
    </div>
  </div>
</div>

        <div>
        <div className="col-md-10" style={{ position: "absolute" , marginTop:"12px" , }}>
            <svg width="100%" height="800">
              <line
                x1="3"
                y1="10"
                x2="3"
                y2="95%"
                stroke="black"
                strokeWidth="1"
               
              />
            </svg>
            
          </div>
                   
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="3%" height="50">
             
              <line
                x1="1"
                y1="23"
                x2="80%"
                y2="23"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="3%" height="50">
             
              <line
                x1="100"
                y1="23"
                x2="300"
                y2="23"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="3%" height="800">
             
              <line
                x1="1"
                y1="95"
                x2="100%"
                y2="95"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="102.5%" height="800">
             
              <line
                x1="1160"
                y1="25"
                x2="100%"
                y2="25"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="102.5%" height="800">
             
              <line
                x1="1160"
                y1="95"
                x2="100%"
                y2="95"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="102.5%" height="800">
             
              <line
                x1="1160"
                y1="250"
                x2="100%"
                y2="250"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="102.5%" height="800">
             
              <line
                x1="1160"
                y1="320"
                x2="100%"
                y2="320"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="102.5%" height="800">
             
              <line
                x1="1160"
                y1="400"
                x2="100%"
                y2="400"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="102.5%" height="800">
             
              <line
                x1="1160"
                y1="470"
                x2="100%"
                y2="470"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>

          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="102.5%" height="800">
             
              <line
                x1="1160"
                y1="545"
                x2="100%"
                y2="545"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="102.5%" height="800">
             
              <line
                x1="1160"
                y1="620"
                x2="100%"
                y2="620"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="102.5%" height="800">
             
              <line
                x1="1160"
                y1="770"
                x2="100%"
                y2="770"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="3%" height="800">
             
              <line
                x1="1"
                y1="250"
                x2="100%"
                y2="250"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>

          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="3%" height="800">
             
              <line
                x1="1"
                y1="320"
                x2="100%"
                y2="320"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="3%" height="800">
             
              <line
                x1="1"
                y1="620"
                x2="100%"
                y2="620"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="3%" height="800">
             
              <line
                x1="1"
                y1="772"
                x2="100%"
                y2="772"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          
          <div className="col-md-12" style={{ position: "absolute" }}>
            <svg width="100%" height="900">
              
              <line
                x1="1240"
                y1="770"
                x2="1240"
                y2="25"
                stroke="black"
                strokeWidth="1"
               
              />
             
            </svg>
          </div>
        <div className="row col-md-11 mt-3" style={{marginLeft:"15px" ,width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                AFFECTIONATE<span className="login-danger">*</span>
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
                SYMPATHETIC<span className="login-danger">*</span>
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
          <div className="row col-md-6 justify-content-end">
            
            <div className="col-md-3" style={{ width: "20%" }}>
              <div className="input-block local-forms">
                <label>
                CRITICAL<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-3" style={{ width: "25%" }}>
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
            <div className="col-md-3" style={{ width: "25%" }}>
              <div className="input-block local-forms">
                <label>
                CRUEL<span className="login-danger">*</span>
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
        <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="3%" height="800">
             
              <line
                x1="1"
                y1="175"
                x2="100%"
                y2="175"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
        <div className="row col-md-11" style={{marginLeft:"15px" ,width:"96%"}}  >
          <div className="row col-md-6">
          <div className="col-md-3">
              <div className="input-block local-forms">
                <label>
                ATTACHMENT<span className="login-danger">*</span>
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
                SELF<span className="login-danger">*</span>
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
            <div className="col-md-3">
              <div className="input-block local-forms">
                <label>
                OBJECTS<span className="login-danger">*</span>
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
                MONEY<span className="login-danger">*</span>
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
                POWER<span className="login-danger">*</span>
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
            <div className="col-md-3">
              <div className="input-block local-forms">
                <label>
                CAREER<span className="login-danger">*</span>
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
          <div className="row col-md-6 justify-content-end" >
            <div className="col-md-3" >
              <div className="input-block local-forms">
                <label>
                MALICE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>

            <div className="col-md-3" >
              <div className="input-block local-forms">
                <label>
                SLANDER<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>

            <div className="col-md-3" >
              <div className="input-block local-forms">
                <label>
                REVENGE<span className="login-danger">*</span>
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
        <div className="row col-md-11 "  style={{marginLeft:"15px",width:"96%"}} >
          <div className="row col-md-6">
            
            <div className="col-md-3">
              <div className="input-block local-forms">
                <label>
                ROMANTIC<span className="login-danger">*</span>
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
                SENTIMENTAL<span className="login-danger">*</span>
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
          <div className="row col-md-6 justify-content-end" >
            <div className="col-md-3" style={{ width: "30%" }}>
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
          
        </div>
        <div className="row col-md-11 "  style={{marginLeft:"15px",width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-2">
              <div className="input-block local-forms">
                <label>
                SAX<span className="login-danger">*</span>
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
                MASTURBATION<span className="login-danger">*</span>
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
                HOMOSEXUAL<span className="login-danger">*</span>
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
                SELF-LOVE<span className="login-danger">*</span>
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
                HETERSOXEUAL<span className="login-danger">*</span>
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
                PREMARITAL<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                EXTRAMARITAL<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                LEWD<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                GESTURE<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                SONG<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                TALK<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                DREAMS<span className="login-danger">*</span>
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
          <div className="row col-md-6 d-flex flex-column align-items-end">
    <div className="col-md-3" style={{ width: "40%" }}>
      <div className="input-block local-forms">
        <label>
          RELATIONS<span className="login-danger">*</span>
        </label>
        <input
          className="form-control"
          type="text"
          name="lastName"
          required
        />
      </div>
    </div>
    <div className="col-md-3" style={{ width: "40%" }}>
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
    <div className="col-md-3" style={{ width: "40%" }}>
      <div className="input-block local-forms">
        <label>
        SADISM<span className="login-danger">*</span>
        </label>
        <input
          className="form-control"
          type="text"
          name="lastName"
          required
        />
      </div>
      <div className="input-block local-forms">
        <label>
        PLEASURE<span className="login-danger">*</span>
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
        <div className="row col-md-11 "  style={{marginLeft:"15px",width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-3">
              <div className="input-block local-forms">
                <label>
                EGOTISM<span className="login-danger">*</span>
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
                PROUD<span className="login-danger">*</span>
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
                RUDE<span className="login-danger">*</span>
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
                CONTEMPT<span className="login-danger">*</span>
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
                ARROGANT<span className="login-danger">*</span>
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
                IMPERIOUS<span className="login-danger">*</span>
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
          <div className="row col-md-6 justify-content-end" >
           
            <div className="col-md-4" style={{ width: "40%" }}>
              <div className="input-block local-forms">
                <label>
                MISANTHROPY<span className="login-danger">*</span>
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
       
        <div className="row col-md-11 " style={{marginLeft:"15px",width:"96%"}} >
          <div className="row col-md-6" >
            
            <div className="col-md-5">
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
           
           
          </div>
        
      <svg width="100%" height="900" style={{ position: 'absolute', top: '60%', left: '0', transform: 'translateY(-50%)' }}>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>
        </defs>
        <line x1="30%" y1="820" x2="320" y2="820" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <line x1="400" y1="820" x2="33%" y2="820" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
        
        
      </svg>

      <svg width="100%" height="900" style={{ position: 'absolute', top: '60%', left: '0', transform: 'translateY(-50%)' }}>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>
        </defs>
        <line x1="900" y1="820" x2="1100" y2="820" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <line x1="1000" y1="820" x2="820" y2="820" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
        
        
      </svg>
   
          <div className="row col-md-6 justify-content-end" >
           
            <div className="col-md-2" style={{ width: "30%" }}>
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

           
          </div>
          
        </div>
        </div>
        <div className="row col-md-11 justify-content-center"  style={{justifyContent:"center" ,marginTop:"-73px"}}>
          
         
              <div className="input-block local-forms" style={{alignItems:"center",display:"flex", width:"30%"}}>
                <label>
                SUSPICIOUS<span className="login-danger">*</span>
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
  );
}
