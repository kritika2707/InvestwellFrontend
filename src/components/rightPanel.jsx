import React from "react"
import Calculator from "../../src/components/index"

// Calling Calculator function in input slider area
function RightPanel() {
  return (
    <div className="rightSideBox">
        <h3 className="backBtn"> 🡨 Back</h3>
        <div className="calculator">
          <Calculator />
        </div>
      </div>
  );
}

export default RightPanel
