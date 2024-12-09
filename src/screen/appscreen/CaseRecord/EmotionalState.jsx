import React, { useState } from "react";
import MentalSateItem from "../DiagramComponent/MentalSateItem";
import { Link } from "react-router-dom";

export default function EmotionalState() {
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
      className="content"
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <div className="row">
        <div className="col-sm-6 col-6">
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
        
        <div
          className="d-flex justify-content-space"
          style={{ justifyContent: "space-between" }}
        >
          <h4 style={{ textAlign: "left" }}>CAUSATION</h4>
        
          {/* <h2 className="btn btn-primary" style={{ marginLeft: "60px" }}>
            {" "}
            1. EMOTIONAL STATE
          </h2> */}
          <h4>CHARACTERISTICS/INTENSITY</h4>
        </div>
        <div className="row col-md-12" style={{ alignItems: "center" }}>
          <div className="col-md-1 mt-3">
            <h4 style={{ textAlign: "center" }}>ANGER</h4>
          </div>
          <div className="col-md-10" style={{ position: "relative" }}>
            <svg width="100%" height="50">
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
                x1="0"
                y1="25"
                x2="100%"
                y2="25"
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1="100%"
                y1="35"
                x2="0"
                y2="35"
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrowhead)"
              />
            </svg>
          </div>

          <div className="col-md-1 mt-3">
            <h4 style={{ textAlign: "center" }}>SADNESS</h4>
          </div>
        </div>
        <div>
        <div className="col-md-10" style={{ position: "absolute" , marginTop:"12px" , }}>
            <svg width="100%" height="560">
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
                y1="395"
                x2="100%"
                y2="395"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="3%" height="800">
             
              <line
                x1="1"
                y1="470"
                x2="100%"
                y2="470"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-10" style={{ position: "absolute" , marginLeft:"2px" }}>
            <svg width="3%" height="800">
             
              <line
                x1="1"
                y1="545"
                x2="100%"
                y2="545"
                stroke="black"
                strokeWidth="1"
               
              />
              
            </svg>
          </div>
          <div className="col-md-12" style={{ position: "absolute" }}>
            <svg width="100%" height="560">
              
              <line
                x1="1240"
                y1="595"
                x2="1240"
                y2="25"
                stroke="black"
                strokeWidth="1"
               
              />
             
            </svg>
          </div>
        <div className="row col-md-11 mt-3" style={{marginLeft:"15px" ,width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-3">
              <div className="input-block local-forms">
                <label>
                  ITTRABLE<span className="login-danger">*</span>
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
                  FRETFUL<span className="login-danger">*</span>
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
                  EXCITABLE<span className="login-danger">*</span>
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
          <div className="row col-md-6">
            <div className="col-md-2" style={{ width: "20%" }}>
              <div className="input-block local-forms">
                <label>
                  MOROSE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2" style={{ width: "18%" }}>
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
            <div className="col-md-3" style={{ width: "20%" }}>
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
            <div className="col-md-3" style={{ width: "25%" }}>
              <div className="input-block local-forms">
                <label>
                  INDIFFERENCE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-2" style={{ width: "17%" }}>
              <div className="input-block local-forms">
                <label>
                  ENNUI<span className="login-danger">*</span>
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
            <div className="col-md-3">
              <div className="input-block local-forms">
                <label>
                  INDIGNATION<span className="login-danger">*</span>
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
            <div className="col-md-3" style={{ width: "50%" }}>
              <div className="input-block local-forms">
                <label>
                  AVERSE : WORK/PLEASURE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>

            <div className="col-md-2" style={{ width: "20%" }}>
              <div className="input-block local-forms">
                <label>
                  QUIET<span className="login-danger">*</span>
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
                IRRASCIBLE<span className="login-danger">*</span>
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
                QUARRELSOME<span className="login-danger">*</span>
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
                ABUSIVE<span className="login-danger">*</span>
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
                HYPOCHONDRIAC<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-3" style={{ width: "30%" }}>
              <div className="input-block local-forms">
                <label>
                MELANCHOLY<span className="login-danger">*</span>
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
                RAGE<span className="login-danger">*</span>
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
                FURY<span className="login-danger">*</span>
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
                VIOLENCE: OBJECTS / PERSONS<span className="login-danger">*</span>
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
            <div className="col-md-3" style={{ width: "30%" }}>
              <div className="input-block local-forms">
                <label>
                DIS-SATISFIED<span className="login-danger">*</span>
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
            <div className="col-md-3">
              <div className="input-block local-forms">
                <label>
                WEEPY<span className="login-danger">*</span>
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
                ESTRANGED<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-3" style={{ width: "30%" }}>
              <div className="input-block local-forms">
                <label>
                REMORSE<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-3" style={{ width: "30%" }}>
              <div className="input-block local-forms">
                <label>
                ANGUISH<span className="login-danger">*</span>
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
                SUPPRESSED<span className="login-danger">*</span>
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
          <div className="row col-md-6 justify-content-end" >
            <div className="col-md-3" style={{ width: "30%" }}>
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
            <div className="col-md-3" style={{ width: "30%" }}>
              <div className="input-block local-forms">
                <label>
                DESPAIR<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-3" style={{ width: "30%" }}>
              <div className="input-block local-forms">
                <label>
                SUICIDAL<span className="login-danger">*</span>
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
            <div className="col-md-3">
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
          <div className="row col-md-6 justify-content-end" >
            <div className="col-md-3" style={{ width: "30%" }}>
              <div className="input-block local-forms">
                <label>
                SEX<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-3" style={{ width: "30%" }}>
              <div className="input-block local-forms">
                <label>
                ALCOHOL<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-3" style={{ width: "30%" }}>
              <div className="input-block local-forms">
                <label>
                SQUANDER<span className="login-danger">*</span>
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
                REPRESSED GUILT<span className="login-danger">*</span>
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
            <div className="col-md-2" style={{ width: "20%" }}>
              <div className="input-block local-forms">
                <label>
                MANIA<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-1" style={{ width: "10%" , position:"relative"}}>
            <svg width="100%" height="50">
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
                x1="0"
                y1="15"
                x2="100%"
                y2="15"
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1="100%"
                y1="25"
                x2="0"
                y2="25"
                stroke="black"
                strokeWidth="1"
                markerEnd="url(#arrowhead)"
              />
            </svg>
            </div>
            <div className="col-md-2" style={{ width: "30%" }}>
              <div className="input-block local-forms">
                <label>
                DEPRESSION<span className="login-danger">*</span>
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
                SOMATIZATION<span className="login-danger">*</span>
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
