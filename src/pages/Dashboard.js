import React, { useState, useEffect } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentsList from "../components/ComponentsList";
import { getComponents } from "../services/api";
import "../App.css";

function Dashboard() {

  const [image, setImage] = useState(null);
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    setComponents(getComponents());
  }, []);

  return (
    <div className="dashboard">

      <h2>Diagram Dashboard</h2>

      {/* Upload section */}
      <div className="upload-box">
        <UploadBox setImage={setImage} />
      </div>

      {/* Main layout */}
      <div className="layout">

        {/* Diagram viewer */}
        <div className="viewer">
          <DiagramViewer
            image={image}
            selectedComponent={selectedComponent}
          />
        </div>

        {/* Components sidebar */}
        <div className="sidebar">
          <ComponentsList
            components={components}
            setSelectedComponent={setSelectedComponent}
          />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;