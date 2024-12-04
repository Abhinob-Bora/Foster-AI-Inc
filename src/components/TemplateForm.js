import React, { useState } from "react";
import FileUpload from "./FildUpload.js";

const TemplateForm = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [templateText, setTemplateText] = useState("");

  const handleFileParsed = (content) => {
    setTemplateText(content); // Update template text with parsed content
  };

  const handleSave = () => {
    if (title.trim() && templateText.trim()) {
      onSave({ title, templateText });
      setTitle("");
      setTemplateText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Template Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Template Text"
        value={templateText}
        onChange={(e) => setTemplateText(e.target.value)}
      />
      <FileUpload onFileParsed={handleFileParsed} />
      <button onClick={handleSave}>Save Template</button>
    </div>
  );
};

export default TemplateForm;
