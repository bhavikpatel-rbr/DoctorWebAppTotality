import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css"; // Import styles for resizable

const DynamicDiagram = () => {
  const [structure, setStructure] = useState("");
  const [form, setForm] = useState("");
  const [functionText, setFunctionText] = useState("");
  const [time, setTime] = useState("");

  const [elements, setElements] = useState([
    { id: 1, label: "Structure", x: 300, y: 50, width: 100, height: 50 },
    { id: 2, label: "Form", x: 100, y: 200, width: 100, height: 50 },
    { id: 3, label: "Time", x: 500, y: 200, width: 100, height: 50 },
    { id: 4, label: "Function", x: 300, y: 300, width: 100, height: 50 },
  ]);

  const [lines, setLines] = useState([
    { from: { x: 350, y: 100 }, to: { x: 350, y: 200 } }, // Structure to Triangle
    { from: { x: 150, y: 250 }, to: { x: 350, y: 200 } }, // Form to Triangle
    { from: { x: 550, y: 250 }, to: { x: 350, y: 200 } }, // Time to Triangle
    { from: { x: 350, y: 350 }, to: { x: 350, y: 200 } }, // Function to Triangle
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

  return (
    <div>
      <svg width="100%" height="400">
        {/* Draw the triangle at the center */}
        <polygon points="330,180 370,180 350,220" fill="navy" />

        {/* Render the lines */}
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

      {/* Render resizable and draggable elements */}
      {elements.map((el) => (
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
                value={structure}
                onChange={(e) => setStructure(e.target.value)}
              />
            </div>
          </ResizableBox>
        </Draggable>
      ))}
    </div>
  );
};

export default DynamicDiagram;
