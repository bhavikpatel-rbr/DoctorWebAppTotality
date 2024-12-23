import React, { useState } from "react";
import MentalSateItem from "../DiagramComponent/MentalSateItem";

export default function MentalState() {
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
        padding: "20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
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
            <li className="breadcrumb-item active">Mental State</li>
          </ul>
        </div>
      </div>
     
            <div
              className="sticky-lg-bottom "
              style={{
                padding: "20px",
                borderRadius:"10px",
                backgroundColor: "#fff",
              }}
            >
              <div>
                <h4 style={{padding:"20px 0px 30px" , fontSize:"24px"}}>{selectedTitle}</h4>
              </div>
              <div className="d-flex justify-content-sapce-between gap-2">
                <div className="input-block local-forms col-2 mb-0">
                  <label>
                    Keyword <span className="login-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Keyword"
                  />
                </div>
                <div className="input-block local-forms col-9 mb-0">
                  <label>
                    Value <span className="login-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    height='45px'
                    name="value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Value"
                  />
                </div>
                <button
                  type="button"
                  style={{width:"100%"}}
                  className="btn btn-success btn-sm ms-2"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
              <div style={{ overflowX: 'auto', margin: '20px 0' }}>
      <table style={{ width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',}}>
        <thead style={{backgroundColor: '#f4f4f4',}}>
          <tr>
            <th style={{border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#333',
    backgroundColor: '#f8f8f8',
    position: 'sticky',
    top: '0',
    zIndex: '1',}}>#</th>
            <th style={{border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#333',
    backgroundColor: '#f8f8f8',
    position: 'sticky',
    top: '0',
    zIndex: '1',}}>Title</th>
            <th style={{border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#333',
    backgroundColor: '#f8f8f8',
    position: 'sticky',
    top: '0',
    zIndex: '1',}}>Keyword</th>
            <th style={{border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#333',
    backgroundColor: '#f8f8f8',
    position: 'sticky',
    top: '0',
    zIndex: '1',}}>Value</th>
          </tr>
        </thead>
        <tbody>
          {savedItems.map((item, index) => (
            <tr key={index} style={{
              backgroundColor: '#fff',
              transition: 'background-color 0.3s',
            } }>
              <td style={{
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    fontSize: '14px',
    color: '#555',
    transition: 'background-color 0.3s',
  }}>{index + 1}</td>
              <td style={{
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    fontSize: '14px',
    color: '#555',
    transition: 'background-color 0.3s',
  }}>{item.title}</td>
              <td style={{
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    fontSize: '14px',
    color: '#555',
    transition: 'background-color 0.3s',
  }}>{item.keyword}</td>
              <td style={{
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    fontSize: '14px',
    color: '#555',
    transition: 'background-color 0.3s',
  }}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </div>
            
         
      

      <div className="" style={{marginTop:'30px' , backgroundColor:"#ffffff" , padding:'30px',borderRadius:"10px"}}>
        <div className="d-flex justify-content-center">
          <h3>B. THE MENTAL STATE</h3>
        </div>

        <div>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1160 800"
    preserveAspectRatio="xMinYMin meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <MentalSateItem
      title="EMOTIONAL"
      onClick={() => {
        setSelectedTitle("EMOTIONAL");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "white",
        boxPositionX: "10",
        boxPositionY: "60",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "110",
        textY: "90",
      }}
    />
    <MentalSateItem
      title="ACTIVITY"
      onClick={() => {
        setSelectedTitle("ACTIVITY");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxPositionX: "10",
        boxPositionY: "180",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#198754",
        textX: "100",
        textY: "212",
      }}
    />
    <MentalSateItem
      title="INACTIVITY"
      onClick={() => {
        setSelectedTitle("INACTIVITY");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxPositionX: "10",
        boxPositionY: "300",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "100",
        textY: "335",
      }}
    />
    <MentalSateItem
      title="SOCIETY"
      onClick={() => {
        setSelectedTitle("SOCIETY");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxPositionX: "10",
        boxPositionY: "480",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "100",
        textY: "510",
      }}
    />
    <MentalSateItem
      title="REACTIONS"
      onClick={() => {
        setSelectedTitle("REACTIONS");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxPositionX: "490",
        boxPositionY: "10",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#198754",
        textX: "580",
        textY: "45",
      }}
    />
    <line
  x1="700" // X coordinate of EVIDENCES
  y1="280" // Y coordinate of EVIDENCES (centered on the box)
  x2="450" // X coordinate of IMBALANCE
  y2="280" // Y coordinate of IMBALANCE
  stroke="black" // Color of the arrow
  strokeWidth="2" // Width of the arrow line
  markerEnd="url(#arrowhead)" // Use arrowhead marker
/>
<line
  x1="600" // X coordinate of EVIDENCES
  y1="280" // Y coordinate of EVIDENCES (centered on the box)
  x2="710" // X coordinate of ACTION (left ed ge)
  y2="280" // Y coordinate of ACTION (top edge)
  stroke="black" // Color of the arrow
  strokeWidth="2" // Width of the arrow line
  markerEnd="url(#arrowhead)" // Use arrowhead marker
/>

{/* Action to functioning */}
<line
  x1="790" // X coordinate of EVIDENCES
  y1="325" // Y coordinate of EVIDENCES (centered on the box)
  x2="920" // X coordinate of ACTION (left ed ge)
  y2="325" // Y coordinate of ACTION (top edge)
  stroke="black" // Color of the arrow
  strokeWidth="2" // Width of the arrow line
  markerEnd="url(#arrowhead)" // Use arrowhead marker
/>

{/* Action to beheviour */}
<line
  x1="790" // X coordinate of EVIDENCES
  y1="200" // Y coordinate of EVIDENCES (centered on the box)
  x2="920" // X coordinate of ACTION (left ed ge)
  y2="200" // Y coordinate of ACTION (top edge)
  stroke="black" // Color of the arrow
  strokeWidth="2" // Width of the arrow line
  markerEnd="url(#arrowhead)" // Use arrowhead marker
/>
{/* Action to Activity */}
<line
  x1="400" // X coordinate of EVIDENCES
  y1="325" // Y coordinate of EVIDENCES (centered on the box)
  x2="250" // X coordinate of ACTION (left ed ge)
  y2="325" // Y coordinate of ACTION (top edge)
  stroke="black" // Color of the arrow
  strokeWidth="2" // Width of the arrow line
  markerEnd="url(#arrowhead)" // Use arrowhead marker
/>

{/* Action to Activity */}
<line
  x1="400" // X coordinate of EVIDENCES
  y1="200" // Y coordinate of EVIDENCES (centered on the box)
  x2="250" // X coordinate of ACTION (left ed ge)
  y2="200" // Y coordinate of ACTION (top edge)
  stroke="black" // Color of the arrow
  strokeWidth="2" // Width of the arrow line
  markerEnd="url(#arrowhead)" // Use arrowhead marker
/>

{/* Evidance to Emotional */}
<line
  x1="530" // X coordinate of EVIDENCES
  y1="200" // Y coordinate of EVIDENCES (centered on the box)
  x2="250" // X coordinate of ACTION (left ed ge)
  y2="90" // Y coordinate of ACTION (top edge)
  stroke="black" // Color of the arrow
  strokeWidth="2" // Width of the arrow line
  markerEnd="url(#arrowhead)" // Use arrowhead marker
/>

{/* Evidance to Ineellecutal */}
<line
  x1="615" // X coordinate of EVIDENCES
  y1="200" // Y coordinate of EVIDENCES (centered on the box)
  x2="910" // X coordinate of ACTION (left ed ge)
  y2="90" // Y coordinate of ACTION (top edge)
  stroke="black" // Color of the arrow
  strokeWidth="2" // Width of the arrow line
  markerEnd="url(#arrowhead)" // Use arrowhead marker
/>
    <MentalSateItem
      title="IMBALANCE"
      onClick={() => {
        setSelectedTitle("IMBALANCE");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxWidth: "50",
        boxHeight: "200",
        boxPositionX: "370",
        boxPositionY: "180",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "290",
        textY: "180",
        textTransform: "rotate(90, 290 ,280)",
      }}
    />
    <MentalSateItem
      title="EVIDENCES"
      onClick={() => {
        setSelectedTitle("EVIDENCES");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxPositionX: "480",
        boxPositionY: "250",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "580",
        textY: "282",
      }}
    />

    {/* Arrow from EVIDENCES to REACTIONS */}
    <line
      x1="580" // X coordinate of EVIDENCES
      y1="250" // Y coordinate of EVIDENCES
      x2="580" // X coordinate of REACTIONS
      y2="90"  // Y coordinate of REACTIONS
      stroke="black" // Color of the arrow
      strokeWidth="2" // Width of the arrow line
      markerEnd="url(#arrowhead)" // Use arrowhead marker
    />


<line
      x1="580" // X coordinate of EVIDENCES
      y1="310" // Y coordinate of EVIDENCES
      x2="580" // X coordinate of DIS - SATISFACTION
      y2="400" // Y coordinate of DIS - SATISFACTION
      stroke="black" // Color of the arrow
      strokeWidth="2" // Width of the arrow line
      markerEnd="url(#arrowhead)" // Use arrowhead marker
    />
    <text
    x="480" // X position slightly to the right of the line end
    y="440" // Y position aligned with DIS - SATISFACTION box
    fontSize="16" // Font size
    fill="black" // Text color
    dominantBaseline="middle" // Vertically center the text
    textAnchor="start" // Align text to the start
  >
   STATE : NATURE & CAUSE
  </text>
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" 
              refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="black" />
        
      </marker>
    </defs>


    <MentalSateItem
      title="ACTION"
      onClick={() => {
        setSelectedTitle("ACTION");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxWidth: "50",
        boxHeight: "200",
        boxPositionX: "740",
        boxPositionY: "180",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "740",
        textY: "200",
        textTransform: "rotate(90, 710 ,250)",
      }}
    />
    
    <MentalSateItem
      title="DIS - SETISFACTION"
      onClick={() => {
        setSelectedTitle("DIS - SETISFACTION");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxWidth: "280",
        boxHeight: "50",
        boxPositionX: "460",
        boxPositionY: "480",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "600",
        textY: "510",
      }}
    />
    
    <MentalSateItem
      title="WORK"
      onClick={() => {
        setSelectedTitle("WORK");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxPositionX: "480",
        boxPositionY: "570",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "580",
        textY: "600",
      }}
    />
     <line
    x1="580" // X coordinate of the DIS - SATISFACTION box
    y1="530" // Y coordinate of the DIS - SATISFACTION box (adjusted slightly for arrow placement)
    x2="580" // X coordinate of the WORK box
    y2="550" // Y coordinate of the WORK box (bottom edge)
    stroke="black" // Color of the arrow
    strokeWidth="2" // Width of the arrow line
    markerEnd="url(#arrowhead)" // Use arrowhead marker
  />

  {/* Arrowhead definition */}
  <defs>
    <marker
      id="arrowhead"
      markerWidth="10"
      markerHeight="7"
      refX="0"
      refY="3.5"
      orient="auto"
    >
      <polygon points="0 0, 10 3.5, 0 7" fill="black" />
    </marker>
  </defs>
    <MentalSateItem
      title="INTELLECTUAL"
      onClick={() => {
        setSelectedTitle("INTELLECTUAL");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxPositionX: "950",
        boxPositionY: "60",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "1050",
        textY: "95",
      }}
    />
    <MentalSateItem
      title="BEHAVIOUR"
      onClick={() => {
        setSelectedTitle("BEHAVIOUR");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxPositionX: "950",
        boxPositionY: "180",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#198754",
        textX: "1050",
        textY: "212",
      }}
    />
    <MentalSateItem
      title="FUCTIONING"
      onClick={() => {
        setSelectedTitle("FUCTIONING");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxPositionX: "950",
        boxPositionY: "300",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "1050",
        textY: "335",
      }}
    />
    <MentalSateItem
      title="FAMILY"
      onClick={() => {
        setSelectedTitle("FAMILY");
        setIsShowModal(true);
      }}
      measurement={{
        boxColor: "#d7e9fc",
        boxPositionX: "950",
        boxPositionY: "480",
        boxPositionRX: "8",
        boxPositionRY: "8",
        textColor: "#0d6efd",
        textX: "1050",
        textY: "510",
      }}
    />
     <line
    x1="460" // X coordinate of the DIS - SATISFACTION box
    y1="505" // Y coordinate of the DIS - SATISFACTION box (adjusted slightly for arrow placement)
    x2="250" // X coordinate of the WORK box
    y2="505" // Y coordinate of the WORK box (bottom edge)
    stroke="black" // Color of the arrow
    strokeWidth="2" // Width of the arrow line
    markerEnd="url(#arrowhead)" // Use arrowhead marker
  />
  <line
    x1="740" // X coordinate of the DIS - SATISFACTION box
    y1="505" // Y coordinate of the DIS - SATISFACTION box (adjusted slightly for arrow placement)
    x2="915" // X coordinate of the WORK box
    y2="505" // Y coordinate of the WORK box (bottom edge)
    stroke="black" // Color of the arrow
    strokeWidth="2" // Width of the arrow line
    markerEnd="url(#arrowhead)" // Use arrowhead marker
  />
  </svg>
</div>

      </div>
    </div>
  );
}
