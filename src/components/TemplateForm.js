import React, { useState, useEffect } from "react"; 
import FileUpload from "./FileUpload";
import "./TemplateForm.css";

const TemplateForm = ({ selectedTemplate, onSave, onClose }) => {
  const [title, setTitle] = useState("");
  const [templateText, setTemplateText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedTemplate) {
      setTitle(selectedTemplate.title);
      setTemplateText(selectedTemplate.templateText);
    }
  }, [selectedTemplate]);

  const handleFileParsed = (content) => {
    setTemplateText(content);
    setError("");
  };

  const handleSave = () => {
    if (!title.trim()) {
      setError("Template title is required.");
      return;
    }

    if (!templateText.trim()) {
      setError("Template text is required.");
      return;
    }

    onSave({ title: title.trim(), templateText: templateText.trim() });
    setTitle("");
    setTemplateText("");
    setError("");
  };

  const handleRewrite = async () => {
    if (!templateText.trim()) {
      setError("Template text is required for rewriting.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`, // Replace with your Groq API key
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "user",
              content: `Rewrite the following text to enhance clarity and professionalism. Provide the rewritten text directly without any introductory or concluding remarks:\n\n${templateText}`,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to rewrite: ${response.statusText}`);
      }

      const data = await response.json();
      const rewrittenText =
        data.choices && data.choices[0]?.message?.content
          ? data.choices[0].message.content
          : "Rewrite failed. Try again.";
      setTemplateText(rewrittenText);
    } catch (error) {
      console.error("Error rewriting template text:", error);
      setError("Failed to rewrite text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="template-form">
      <div className="close-button" onClick={onClose} title="Close Form">
        ✖️
      </div>
      <h2>Clinical Notes</h2>
      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label className="label">
          Template Title
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
        </label>
      </div>

      <div className="form-group">
        <label className="label">
          Template Text
          <span className="rewrite-icon" onClick={handleRewrite} title="Rewrite using AI">
            ✏️
          </span>
        </label>
        <textarea
          placeholder="Enter text here"
          value={templateText}
          onChange={(e) => setTemplateText(e.target.value)}
          className="textarea-field"
        ></textarea>
      </div>

      {isLoading && <div className="loading-message">Rewriting text...</div>}

      <div className="file-upload-section">
        <FileUpload onFileParsed={handleFileParsed} />
      </div>

      <button className="save-button" onClick={handleSave} disabled={isLoading}>
        Save Template
      </button>
    </div>
  );
};

export default TemplateForm;
