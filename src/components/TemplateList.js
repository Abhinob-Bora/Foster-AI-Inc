import React, { useState, useEffect } from "react";
import "./TemplateList.css"; // Ensure your CSS file is imported

function TemplateList({ templates, onSelectTemplate, onDeleteTemplate }) {
  const [activeTemplate, setActiveTemplate] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".template-box")) {
        setActiveTemplate(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleTemplateClick = (template) => {
    setActiveTemplate(template.title);
    onSelectTemplate(template);
  };

  return (
    <div className="template-list">
      {templates.map((template) => (
        <div
          key={template.title}
          className={`template-box ${
            activeTemplate === template.title ? "active" : ""
          }`}
          onClick={() => handleTemplateClick(template)}
        >
          <div className="template-title">{template.title}</div>
          <div className="template-timestamp">{template.timestamp}</div>
        </div>
      ))}
    </div>
  );
}

export default TemplateList;
