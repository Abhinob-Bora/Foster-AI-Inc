# FosterHealth Clinical Note Manager

**FosterHealth** is a web application designed to streamline the management of clinical templates for medical professionals. With capabilities for creating, editing, and storing clinical notes, this app offers a user-friendly interface, integration with file uploads for document parsing, and support for automated rewriting using AI.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)


## Project Overview

**FosterHealth** is designed to help healthcare professionals organize and manage their clinical notes efficiently. It enables users to create new templates, edit existing ones, and save them locally for future reference. Users can upload .docx and .pdf documents, which are parsed to extract template content, and rewrite the content for improved clarity using AI.

## Features

- **Create and Edit Templates**: Users can create new templates and edit existing ones.
- **File Upload and Parsing**: Support for uploading .docx and .pdf files with content extraction.
- **Rewriting with AI**: Integrate with AI services to rewrite the text for clarity and professionalism.
- **Local Storage**: Store templates in local storage for offline access and persistence.

## Technologies Used

- **Frontend**: React.js
- **State Management**: React hooks (`useState`, `useEffect`)
- **File Parsing**: Custom utility functions for parsing .docx and .pdf files.
- **AI API Integration**: Groq API for content rewriting.
- **Styling**: CSS for a responsive and professional UI design.

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/foster-health.git
   ```
2. **Installation command**:
     ```bash
     npm install
    ```
3. **Installation command**:
     ```bash
     npm start
     ```

**Usage**:
Creating a New Template: Click the "New Note +" button to open the template form. Enter the title and content, and click "Save Template" to store the template.
Editing an Existing Template: Click on a template in the list to open it for editing.
Uploading Files: Use the file upload section to add .docx or .pdf files. The content will be extracted and displayed in the template text area.
Rewriting Text: Click the rewrite icon (✏️) to send the content to the AI service for rewriting. The rewritten content will be displayed in the text area.





