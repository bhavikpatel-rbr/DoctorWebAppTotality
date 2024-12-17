import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { MdArrowDropDown, MdClose } from 'react-icons/md';
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css"; // Import styles for resizable

const DynamicDiagram = () => {
  const [structure, setStructure] = useState("");
  const [form, setForm] = useState("");
  const [functionText, setFunctionText] = useState("");
  const [items, setItems] = useState([]);
  const [time, setTime] = useState("");
  const [inputValue, setInputValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [elements, setElements] = useState([
    { id: 1, label: "Structure", x: 300, y: 50, width: 100, height: 50 },
    { id: 2, label: "Form", x: 100, y: 200, width: 100, height: 50 },
    { id: 3, label: "Time", x: 500, y: 200, width: 100, height: 50 },
    { id: 4, label: "Function", x: 300, y: 300, width: 100, height: 50 },
  ]);

  const [lines, setLines] = useState([
   
  ]);

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

  // Stop dragging the line
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    resizingLineRef.current = null;
  };

  // Check if elements are close enough to combine
  const isClose = (el1, el2) => {
    const dx = el1.x - el2.x;
    const dy = el1.y - el2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < 100; // Adjust the threshold as needed
  };
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleDropdownSelect = (value) => {
    setDropdownValue(value);
    setDropdownOpen(false);
  };

  const handleAddItem = () => {
    if (inputValue && dropdownValue) {
      setItems([...items, { inputValue, dropdownValue }]);
      setInputValue('');
      setDropdownValue('');
    }
  };
  // Combine elements if they are close
  const handleStop = (e, data, elementId) => {
    setElements((prevElements) => {
      const newElements = [...prevElements];
      const currentElement = newElements.find((el) => el.id === elementId);

      if (currentElement) {
        currentElement.x = data.x;
        currentElement.y = data.y;

        newElements.forEach((el) => {
          if (el.id !== elementId && isClose(currentElement, el)) {
            // Combine elements
            currentElement.width = Math.max(currentElement.width, el.width);
            currentElement.height = Math.max(currentElement.height, el.height);
            currentElement.label += ` & ${el.label}`;

            // Remove the combined element
            const index = newElements.indexOf(el);
            if (index > -1) {
              newElements.splice(index, 1);
            }

            // Update lines
            setLines((prevLines) =>
              prevLines.map((line) => {
                if (line.from.x === el.x + el.width / 2 && line.from.y === el.y + el.height / 2) {
                  return { ...line, from: { x: currentElement.x + currentElement.width / 2, y: currentElement.y + currentElement.height / 2 } };
                }
                if (line.to.x === el.x + el.width / 2 && line.to.y === el.y + el.height / 2) {
                  return { ...line, to: { x: currentElement.x + currentElement.width / 2, y: currentElement.y + currentElement.height / 2 } };
                }
                return line;
              })
            );
          }
        });
      }

      return newElements;
    });
  };

  const handleAddLine = () => {
    const newLine = {
      from: { x: 150, y: 450 },
      to: { x: 600, y: 450 },
    };
    setLines([...lines, newLine]);
  };

  return (
    <div >
       <div className="input-section">
          <input
            type="text"
            className="input-field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Select SFFT Diagnosis"
          />
          <button className="dropdown-button" onClick={toggleDropdown}>
            {dropdownValue || <MdArrowDropDown size={24} />}
          </button>
          
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={() => handleDropdownSelect('Value 1')}>Value 1</button>
              <button className="dropdown-item" onClick={() => handleDropdownSelect('Value 2')}>Value 2</button>
              <button className="dropdown-item" onClick={() => handleDropdownSelect('Value 3')}>Value 3</button>
            </div>
          )}
          <button className="save-button">SAVE</button>
          
        </div>
        <div className="action-buttons">
        <div className="">
        <button className="analysis-button">ANALYSIS</button>
        <button className="save-button"onClick={handleAddLine}>ADD LINE</button>
        </div>
        <div className="flex">
        <button className="remove-button">REMOVE</button>
        <button className="remove-button"  style={{marginLeft:'10px'}} onClick={handleAddItem}>+</button>
        </div>
        
     
         
        </div>
        <div className="diagram">
       
        <div className="structure">
          <h4 style={{textAlign:"center"}}>structure</h4>
          <textarea
          className="sffttextarea" 
            type="text" 
            value={structure} 
            onChange={(e) => setStructure(e.target.value)} 
          />
        </div>
        <div className="form ">
        <h4 style={{textAlign:"center"}}>form</h4>
          <textarea 
           className="sffttextarea" 
            type="text" 
            value={form} 
            onChange={(e) => setForm(e.target.value)} 
          />
        </div>
        <div className="triangle">
          
        </div>
      
      <svg width="100%" height="600">
      
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
        <div className="function">
        <h4 style={{textAlign:"center"}}>function</h4>
          <textarea 
           className="sffttextarea" 
            type="text" 
            value={functionText} 
            onChange={(e) => setFunctionText(e.target.value)} 
          />
        </div>
        <div className="time">
          <h4 style={{textAlign:"center"}}>time</h4>
          <textarea 
           className="sffttextarea" 
            type="text" 
            value={time} 
          
            onChange={(e) => setTime(e.target.value)} 
          />
        </div>
       
       
      </div>
     
        <div>
    

      {/* Render resizable and draggable elements */}
      {/* {elements.map((el) => (
        <Draggable key={el.id} defaultPosition={{ x: el.x, y: el.y }}>
          <ResizableBox
            width={el.width}
            height={el.height}
            minConstraints={[50, 50]} // Set minimum size constraints
            maxConstraints={[300, 300]} // Set maximum size constraints
            onResizeStop={(e, data) => {
              setElements((prevElements) =>
                prevElements.map((element) =>
                  element.id === el.id
                    ? {
                        ...element,
                        width: data.size.width,
                        height: data.size.height,
                      }
                    : element
                )
              );
            }}
          >
            <div className="structure">
              <h4>{el.label}</h4>
              <input
                type="text"
                value={
                  el.label === "Structure"
                    ? structure
                    : el.label === "Form"
                    ? form
                    : el.label === "Time"
                    ? time
                    : functionText
                }
                onChange={(e) => {
                  if (el.label === "Structure") setStructure(e.target.value);
                  if (el.label === "Form") setForm(e.target.value);
                  if (el.label === "Time") setTime(e.target.value);
                  if (el.label === "Function") setFunctionText(e.target.value);
                }}
                placeholder={`Enter ${el.label} text`}
              />
            </div>
          </ResizableBox>
        </Draggable>
      ))} */}
    </div>
    </div>
  );
};

export default DynamicDiagram;
