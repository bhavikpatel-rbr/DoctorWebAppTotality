import React from "react";

export default function MentalSateItem({
  title,
  onClick,
  measurement,
}) {
  return (
    <g id={title} onClick={onClick}>
      <rect
        width={measurement.boxWidth ? measurement.boxWidth : "200"}
        height={measurement.boxHeight ? measurement.boxHeight : "50"}
        x={measurement.boxPositionX}
        y={measurement.boxPositionY}
        rx={measurement.boxPositionRX}
        ry={measurement.boxPositionRY}
        fill="white" // Background color
        stroke="#000" // Border color
        strokeWidth="2" // Border thickness
      />
      <text
        x={measurement.textX}
        y={measurement.textY}
        fontSize="18" // Corrected to camelCase
        textAnchor="middle" // Corrected to camelCase
        fill="#000" // Text color
        transform={measurement.textTransform ? measurement.textTransform : ''}
      >
        {title}
      </text>
    </g>
  );
}
