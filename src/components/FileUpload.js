import React, { useState } from "react";
import { parseDocx, parsePdf } from "../utils/fileParser";
import "./FileUpload.css";

const FileUpload = ({ onFileParsed }) => {
  const [fileName, setFileName] = useState("No file chosen");
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      try {
        const content = await parseFile(file);
        onFileParsed(content);
        setError(""); // Clear error if parsing is successful
      } catch (err) {
        setError("Failed to parse the file. Please upload a valid .docx or .pdf file.");
        setFileName("No file chosen"); // Reset file name if parsing fails
      }
    } else {
      setFileName("No file chosen");
      setError(""); // Clear any previous error when file is cleared
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
    <div className="file-upload-container">
      <label className="file-upload-label" htmlFor="file-upload">
        Drag & drop or click to upload a .docx or .pdf file
        <input
          type="file"
          id="file-upload"
          accept=".docx, .pdf"
          onChange={handleFileChange}
          className="file-upload-input"
        />
      </label>
      <div className="file-info">{fileName}</div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FileUpload;
