import React, { useState } from "react";

function DiagramViewer({ image, selectedComponent }) {

  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {
    setZoom(zoom + 0.2);
  };

  const zoomOut = () => {
    if (zoom > 0.4) {
      setZoom(zoom - 0.2);
    }
  };

  const resetZoom = () => {
    setZoom(1);
  };

  return (
    <div>

      {/* Zoom Buttons */}
      <div className="zoom-buttons" style={{ marginBottom: "15px" }}>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={resetZoom}>Reset</button>
      </div>

      {/* Image Container */}
      <div
        style={{
          width: "100%",
          height: "400px",
          overflow: "auto",
          border: "1px solid #ddd",
          borderRadius: "6px",
          padding: "10px",
          background: "#fafafa"
        }}
      >
        {image ? (
          <img
            src={image}
            alt="diagram"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: "top left",
              maxWidth: "100%"
            }}
          />
        ) : (
          <p>No diagram uploaded</p>
        )}
      </div>

      {/* Selected Component */}
      {selectedComponent && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "#ecf5ff",
            borderRadius: "6px",
            fontWeight: "bold",
            color: "#2c3e50"
          }}
        >
          Selected Component: {selectedComponent}
        </div>
      )}

    </div>
  );
}

export default DiagramViewer;