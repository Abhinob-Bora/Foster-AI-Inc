Project Documentation: React Template Application
Overview
This React application enables users to manage templates, view their details, and interact with them. The app includes template selection, an editable form, and the ability to highlight a template when clicked. Additionally, clicking outside a template box removes the active highlight.

Prerequisites
Node.js (>= 14.x recommended)
npm (Node Package Manager)
Installation Steps
Step 1: Clone the Repository
First, clone the repository to your local machine using the following command:

bash
Copy code
git clone <repository-url>
Step 2: Navigate to the Project Directory
Change your working directory to the project folder:

bash
Copy code
cd <project-folder>
Step 3: Install Dependencies
Install the required npm packages by running:

bash
Copy code
npm install
Step 4: Set Up Environment Variables
This project may require an API key for connecting to the GROQ database or other services. Create a .env file in the root directory of the project and add the following line:

bash
Copy code
REACT_APP_GROQ_API_KEY=your-groq-api-key-here
Ensure that the environment variables are accessible throughout your app by using process.env.REACT_APP_GROQ_API_KEY in your code where needed.

Step 5: Start the Development Server
Run the development server with the following command:

bash
Copy code
npm start
This will start the app on http://localhost:3000 by default.

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
Components
App.js
Description: The main application component that manages state and renders the TemplateList and TemplateForm components.
State Variables:
templates: Array holding template objects.
selectedTemplate: The template currently selected for editing.
isFormOpen: Boolean indicating if the form is open.
Functions:
saveTemplate: Saves a new or edited template to the state and localStorage.
deleteTemplate: Removes a template from the state and localStorage.
onCancel: Closes the form and resets selectedTemplate.
TemplateList.js
Description: Displays the list of template boxes. Each box can be clicked to view or edit a template.
State Variables:
activeTemplate: The title of the currently active template.
Functions:
handleTemplateClick: Marks the clicked template as active and triggers the onSelectTemplate prop.
handleClickOutside: Closes the active highlight when a click outside the template boxes is detected.
TemplateForm.js
Description: A form component used for creating and editing templates.
Props:
selectedTemplate: The template being edited (optional).
onSave: Callback to save the template data.
onCancel: Callback to close the form without saving.
Environment Variables
Ensure that the following environment variables are correctly set for connecting to services such as GROQ:

bash
Copy code
REACT_APP_GROQ_API_KEY=your-groq-api-key-here
Accessing Environment Variables
Use process.env.REACT_APP_GROQ_API_KEY in your code to access the API key:

javascript
Copy code
const apiKey = process.env.REACT_APP_GROQ_API_KEY;
Code Example
Sample API Call Using GROQ
javascript
Copy code
import fetch from 'node-fetch';

const getGROQData = async () => {
  const apiKey = process.env.REACT_APP_GROQ_API_KEY;
  const response = await fetch('https://your-groq-endpoint.com', {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
Styling Information
General Styles
.template-list: Styles the container for the template list with flexbox and spacing.
.template-box: Styles each individual template box, including background color, padding, and border-radius.
.template-box.active: Applies a blue highlight when the template box is active.
.template-title: Styles the title text within each box.
.template-timestamp: Styles the timestamp displayed at the bottom of each template box.
Commands Summary
Install Dependencies: npm install
Run the Development Server: npm start
Build for Production: npm run build
