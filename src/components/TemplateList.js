import React from 'react';

function TemplateList({ templates, onSelectTemplate, onDeleteTemplate }) {
  return (
    <div className="template-list">
      <h2>Saved Templates</h2>
      <ul>
        {templates.map((template) => (
          <li key={template.title}>
            <span onClick={() => onSelectTemplate(template)}>{template.title}</span>
            <button onClick={() => onDeleteTemplate(template.title)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TemplateList;