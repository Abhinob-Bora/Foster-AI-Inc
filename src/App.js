import React, { useState } from "react";
import TemplateForm from "./components/TemplateForm";
import TemplateList from "./components/TemplateList";
import "./App.css";

function App() {
  const [templates, setTemplates] = useState(
    JSON.parse(localStorage.getItem("templates")) || []
  );
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveTemplate = (template) => {
    const timestamp = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const updatedTemplates = selectedTemplate
      ? templates.map((t) =>
          t.title === selectedTemplate.title
            ? { ...template, timestamp: t.timestamp }
            : t
        )
      : [{ ...template, timestamp }, ...templates]; // Add new template at the beginning

    setTemplates(updatedTemplates);
    localStorage.setItem("templates", JSON.stringify(updatedTemplates));
    setSelectedTemplate(null);
    setIsFormOpen(false);
  };

  const deleteTemplate = (title) => {
    const updatedTemplates = templates.filter((t) => t.title !== title);
    setTemplates(updatedTemplates);
    localStorage.setItem("templates", JSON.stringify(updatedTemplates));
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>
          <span>Foster</span>
          <span className="highlight">Health</span>
        </h1>
        <button className="new-note-button" onClick={() => setIsFormOpen(true)}>
          New Note +
        </button>
      </div>
      <div className="content">
        <TemplateList
          templates={templates}
          onSelectTemplate={(template) => {
            setSelectedTemplate(template);
            setIsFormOpen(true);
          }}
          onDeleteTemplate={deleteTemplate}
        />
        {isFormOpen && (
          <div className="form-overlay">
            <TemplateForm
              selectedTemplate={selectedTemplate}
              onSave={saveTemplate}
              onClose={() => setIsFormOpen(false)} // Pass the function to close the form
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
