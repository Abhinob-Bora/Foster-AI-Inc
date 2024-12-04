import React, { useState } from "react";
import { parseDocx, parsePdf } from "../utils/fileParser";

const FileUpload = ({ onFileParsed }) => {
  const [error, setError] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const content = await parseFile(file);
        onFileParsed(content);
      } catch (err) {
        setError("Failed to parse the file. Please upload a valid .docx or .pdf file.");
      }
    }
  };

  const parseFile = async (file) => {
    const fileType = file.name.split(".").pop().toLowerCase();
    if (fileType === "docx") {
      return await parseDocx(file);
    } else if (fileType === "pdf") {
      return await parsePdf(file);
    } else {
      throw new Error("Unsupported file format.");
    }
  };

  return (
    <div>
      <label htmlFor="fileUpload" className="upload-label">
        Drag & drop or click to upload a .docx or .pdf file
      </label>
      <input
        type="file"
        id="fileUpload"
        accept=".docx, .pdf"
        onChange={handleFileUpload}
        className="upload-input"
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FileUpload;
