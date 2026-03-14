import React, { useState } from "react";

function ComponentsList({ components, setSelectedComponent }) {

  const [selected, setSelected] = useState(null);

  const handleClick = (item) => {
    setSelected(item.id);
    setSelectedComponent(item.name);
  };

  return (
    <div>
      <h3>Components</h3>

      {components.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item)}
          className="components-item"
          style={{
            background: selected === item.id ? "#2ecc71" : "white",
            color: selected === item.id ? "white" : "black",
            padding: "12px",
            borderBottom: "1px solid #eee",
            cursor: "pointer"
          }}
        >
          {item.name}
        </div>
      ))}

    </div>
  );
}

export default ComponentsList;