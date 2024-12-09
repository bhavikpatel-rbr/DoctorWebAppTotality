import React, { useRef, useState } from "react";
import MentalSateItem from "../DiagramComponent/MentalSateItem";
import { Link } from "react-router-dom";

export default function EmotionalState3() {
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

  const renderVerticalLine = (x, height) => (
    <svg width="100%" height={height}>
      <line x1={x} y1="0" x2={x} y2="95%" stroke="black" strokeWidth="1" />
    </svg>
  );
  
  const renderHorizontalLine = (y, width) => (
    <svg width={width} height="50">
      <line x1="1" y1={y} x2="100%" y2={y} stroke="black" strokeWidth="1" />
    </svg>
  );

  const [lines, setLines] = useState([
   
  ]);
  
  const verticalLines = [
    { x: 1240, height: 715 },
    { x: 1000, height: 15 },
    { x: 3, height: 715 },
  ];


  const resizingLineRef = useRef(null);

  // Start dragging the line
  const handleMouseDown = (lineIndex, point, e) => {
    resizingLineRef.current = {
      lineIndex,
      point,
      startX: e.clientX,
      startY: e.clientY,
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    resizingLineRef.current = null;
  };


  // Move the line endpoints on mouse move
  const handleMouseMove = (e) => {
    if (resizingLineRef.current) {
      const { lineIndex, point } = resizingLineRef.current;

      const dx = e.clientX - resizingLineRef.current.startX;
      const dy = e.clientY - resizingLineRef.current.startY;

      setLines((prevLines) =>
        prevLines.map((line, index) =>
          index === lineIndex
            ? {
                ...line,
                [point]: {
                  x: line[point].x + dx,
                  y: line[point].y + dy,
                },
              }
            : line
        )
      );

      // Update start positions
      resizingLineRef.current.startX = e.clientX;
      resizingLineRef.current.startY = e.clientY;
    }
  };

  const formFields = [
    { label: "ANXIOUS", name: "anxious" },
    { label: "ANTICIPATORY", name: "anticipatory" },
    { label: "DEPRESSIVE", name: "depressive" },
    { label: "NERVOUS", name: "nervous" },
    { label: "AGATATION", name: "agitation" },
    { label: "WORRY", name: "worry" },
    { label: "TIMID", name: "timid" },
    { label: "STARTLED", name: "startled" },
    { label: "GUILT", name: "guilt" },
    { label: "BEHAVIOUR", name: "behaviour" },
    { label: "DREEMS", name: "dreems" },
    { label: "RESTLESS", name: "restless" },
    { label: "SLEEPLESS", name: "sleepless" },
    { label: "AUTONOMIC", name: "autonomic" },
    { label: "IMBALANCE", name: "imbalance" },
    { label: "ENDOCRINE", name: "endocrine" },
    { label: "SOMETIZATIION", name: "sometization" },
  ];
  
  const horizontalLines = [
    { y: 23, width: "3%" },
    { y: 95, width: "3%" },
    { y: 25, width: "102.5%" },
    { y: 95, width: "102.5%" },
    { y: 120, width: "102.5%" },
    { y: 250, width: "102.5%" },
    { y: 320, width: "102.5%" },
    { y: 400, width: "102.5%" },
    { y: 470, width: "102.5%" },
    { y: 545, width: "102.5%" },
    { y: 620, width: "102.5%" },
    { y: 770, width: "102.5%" },
    { y: 170, width: "3%" },
    { y: 250, width: "3%" },
    { y: 320, width: "3%" },
    { y: 400, width: "3%" },
    { y: 470, width: "3%" },
    { y: 550, width: "3%" },
    { y: 620, width: "3%" },
  ];
  
  const handleAddLine = () => {
    const newLine = {
      from: { x: 5, y: 15 },
      to: { x: 800, y: 15 },
    };
    setLines([...lines, newLine]);
  };

  return (
    <div
      className="content"
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
      <div className="row">
      <button className="save-button"onClick={handleAddLine}>Add Line</button>
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
      <h4 style={{ marginTop:"-10px" }}>FEAR</h4>
    </div>
    <div className="col-4 text-center">
      <h2 className="btn btn-primary" style={{ marginTop:"-20px" , marginBottom:"40px"}}>FRIGHT</h2>
    </div>
    <div className="col-4 text-end">
      <h4 style={{ marginTop:"-10px" }}>ANXIETY</h4>
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
        
        
      </svg>
    </div>
    <div className="col-12" style={{marginTop:"-50px"}}>
    <svg width="100%" height="1000" style={{position:"absolute" }}>
      
      {lines.map((line, index) => (
        <g key={index}>
          <line
            x1={line.from.x}
            y1={line.from.y}
            x2={line.to.x}
            y2={line.to.y}
            stroke="black"
            strokeWidth={2}
          />

          {/* Draggable 'from' point */}
          <circle
            cx={line.from.x}
            cy={line.from.y}
            r={5}
            fill="red"
            onMouseDown={(e) => handleMouseDown(index, "from", e)}
          />

          {/* Draggable 'to' point */}
          <circle
            cx={line.to.x}
            cy={line.to.y}
            r={5}
            fill="blue"
            onMouseDown={(e) => handleMouseDown(index, "to", e)}
          />
        </g>
      ))}
    </svg>
    </div>
  </div>
 

        <div>
       
    {/* {verticalLines.map((line, index) => (
      <div key={index} className="col-12" style={{ position: "absolute", marginTop: "-60px" }}>
        {renderVerticalLine(line.x, line.height)}
      </div>
    ))}
    {horizontalLines.map((line, index) => (
      <div key={index} className="col-md-10" style={{ position: "absolute", marginLeft: "2px" }}>
        {renderHorizontalLine(line.y, line.width)}
      </div>
    ))}
    <div className="col-md-12" style={{ position: "absolute" }}>
      <svg width="100%" height="900">
        <line x1="1240" y1="770" x2="1240" y2="25" stroke="black" strokeWidth="1" />
      </svg>
    </div> */}

 
          
        <div className="row col-md-12 mt-3" style={{marginLeft:"15px" ,width:"100%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                ANXIOUS<span className="login-danger">*</span>
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
          <div className="row col-md-6 justify-content-end" style={{marginLeft:"30px"}}>
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                ANTICIPATORY<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="col-md-4 justify-content-end"  >
             
            </div>
            <div className="col-md-4 justify-content-end"  >
              <div className="input-block local-forms">
                <label>
                DEPRESSIVE<span className="login-danger">*</span>
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
        <div className="row col-md-12" style={{marginLeft:"15px" ,width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                NERVOUS<span className="login-danger">*</span>
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
            
            
            <div className="col-md-4 justify-content-end"  >
              <div className="input-block local-forms">
                <label>
                AGATATION<span className="login-danger">*</span>
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
        <div className="row col-md-12" style={{marginLeft:"15px" ,width:"96%"}}>
          <div className="row col-md-6">
            
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
        <div className="row col-md-12" style={{marginLeft:"15px" ,width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                TIMID<span className="login-danger">*</span>
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
        <div className="row col-md-12" style={{marginLeft:"15px" ,width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                STARTLED<span className="login-danger">*</span>
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
        <div className="row col-md-12" style={{marginLeft:"15px" ,width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                GUILT<span className="login-danger">*</span>
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
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                BEHAVIOUR<span className="login-danger">*</span>
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
              <div className="input-block local-forms">
                <label>
                DREEMS<span className="login-danger">*</span>
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
        <div className="row col-md-12" style={{marginLeft:"15px" ,width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                RESTLESS<span className="login-danger">*</span>
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
        <div className="row col-md-12" style={{marginLeft:"15px" ,width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                SLEEPLESS<span className="login-danger">*</span>
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
        <div className="row col-md-12" style={{marginLeft:"15px" ,width:"96%"}}>
          <div className="row col-md-6">
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                AUTONOMIC<span className="login-danger">*</span>
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
                IMBALANCE<span className="login-danger">*</span>
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
            
            <div className="col-md-4">
              <div className="input-block local-forms">
                <label>
                ENDOCRINE<span className="login-danger">*</span>
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
                SOMETIZATIION<span className="login-danger">*</span>
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
        
      
        </div>
      </div>
    </div>
  );
}
