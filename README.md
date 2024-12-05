# React Template Application

## Overview
This React application enables users to manage, view, and interact with templates. It includes functionalities for template selection, editing, and applying active highlights, as well as handling clicks outside of templates to remove the highlight.

## Features
- **Create and Edit Templates**: Add new templates and modify existing ones.
- **Template Selection**: Select templates to edit and highlight them.
- **Click Outside to Deselect**: Remove the highlight from a template when clicking outside of it.
- **Local Storage Support**: Persist templates in local storage to maintain data across sessions.

## Prerequisites
- [Node.js](https://nodejs.org/) (>= 14.x recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

### Step 1: Clone the Repository
Clone the repository to your local machine:
```bash
git clone <repository-url>
Step 2: Navigate to the Project Directory
bash
Copy code
cd <project-folder>
Step 3: Install Dependencies
bash
Copy code
npm install
Step 4: Set Up Environment Variables
Create a .env file in the root of your project and add your GROQ API key:

bash
Copy code
REACT_APP_GROQ_API_KEY=your-groq-api-key-here
Note: Make sure to replace your-groq-api-key-here with your actual API key.

Step 5: Start the Development Server
bash
Copy code
npm start
Your app will be accessible at http://localhost:3000.

Folder Structure
lua
Copy code
/<project-root>
|-- /src
|   |-- /components
|   |   |-- TemplateForm.js
|   |   |-- TemplateList.js
|   |-- App.js
|   |-- index.js
|   |-- App.css
|   |-- TemplateList.css
|-- .env
|-- package.json
|-- README.md
Components Overview
App.js
Purpose: The main application component that manages the state and renders TemplateList and TemplateForm.
State Variables:
templates: Array storing template objects.
selectedTemplate: The currently selected template for editing.
isFormOpen: Boolean indicating whether the form is open or not.
Functions:
saveTemplate: Saves or updates a template and stores it in local storage.
deleteTemplate: Deletes a template from the state and local storage.
onCancel: Closes the form and resets selectedTemplate.
TemplateList.js
Purpose: Displays a list of template boxes. Templates can be clicked to select and view or edit.
State Variables:
activeTemplate: The title of the currently active template.
Functions:
handleTemplateClick: Marks a template as active and calls the onSelectTemplate prop.
handleClickOutside: Closes the active highlight when a click outside of the template boxes is detected.
TemplateForm.js
Purpose: A form component for creating or editing templates.
Props:
selectedTemplate: The template being edited (optional).
onSave: Callback for saving the template.
onCancel: Callback for closing the form without saving.
Environment Variables
This application uses environment variables for securely accessing the GROQ API.

Required Environment Variable
REACT_APP_GROQ_API_KEY: Your GROQ API key.
Add the variable to your .env file:

bash
Copy code
REACT_APP_GROQ_API_KEY=your-groq-api-key-here
Usage
Once installed and started, you can use the application to:

Create new templates by clicking the "New Note +" button.
View and edit existing templates by clicking on them.
Close the form or deselect templates by clicking outside the template boxes.
Commands Summary
Install Dependencies: npm install
Start Development Server: npm start
Build for Production: npm run build
