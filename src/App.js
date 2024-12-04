import React, { useState } from 'react';
import TemplateForm from './components/TemplateForm';
import TemplateList from './components/TemplateList';
import './App.css';

function App() {
  const [templates, setTemplates] = useState(JSON.parse(localStorage.getItem('templates')) || []);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveTemplate = (template) => {
    const updatedTemplates = selectedTemplate
      ? templates.map((t) => (t.title === selectedTemplate.title ? template : t))
      : [...templates, template];

    setTemplates(updatedTemplates);
    localStorage.setItem('templates', JSON.stringify(updatedTemplates));
    setSelectedTemplate(null);
    setIsFormOpen(false);
  };

  const deleteTemplate = (title) => {
    const updatedTemplates = templates.filter((t) => t.title !== title);
    setTemplates(updatedTemplates);
    localStorage.setItem('templates', JSON.stringify(updatedTemplates));
  };

  return (
    <div className="app-container">
      <button className="new-note-button" onClick={() => setIsFormOpen(true)}>
        New Note
      </button>
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
            onCancel={() => {
              setSelectedTemplate(null);
              setIsFormOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;