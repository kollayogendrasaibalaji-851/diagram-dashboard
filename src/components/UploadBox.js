import React, { useState } from "react";

function UploadBox({ setImage }) {

  const [fileName, setFileName] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input type="file" accept="image/png, image/jpeg" onChange={handleUpload} />

      {fileName && <p>Uploaded: {fileName}</p>}
    </div>
  );
}

export default UploadBox;