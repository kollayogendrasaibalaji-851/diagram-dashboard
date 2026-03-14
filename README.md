# Diagram Dashboard

## Project Overview

Diagram Dashboard is a React application that allows users to upload a diagram image and view a list of circuit components in a sidebar. Users can zoom into the diagram and select components from the list.

This project demonstrates React fundamentals, component structure, and UI layout.

---

## Features

### Upload Diagram

* Upload image files (PNG/JPG)
* Display uploaded file name
* Show preview of the uploaded image
* Allow replacing the uploaded image

### Diagram Viewer

* Display uploaded diagram
* Zoom In functionality
* Zoom Out functionality
* Reset zoom

### Components Sidebar

Displays mock component data:

* Resistor
* Capacitor
* Diode
* Transistor

When a component is clicked:

* The component is highlighted in the sidebar
* The selected component name is displayed below the diagram viewer

### Dashboard Layout

The dashboard contains:

* Upload section at the top
* Two column layout below:

  * Left side: Diagram viewer
  * Right side: Components list

### Responsive Design

The interface works properly on desktop and tablet screens.

---

## Technologies Used

* React.js
* React Hooks (useState, useEffect)
* JavaScript (ES6)
* CSS

---

## Project Structure

src
├── components
│   ├── UploadBox.js
│   ├── DiagramViewer.js
│   └── ComponentsList.js

├── pages
│   └── Dashboard.js

├── services
│   └── api.js

├── App.js
├── index.js
└── App.css

---

## Installation & Running the Project

### Install dependencies

npm install

### Start the development server

npm start

The application will run at:

http://localhost:3000

---

## Author

Kolla Yogendra Sai Balaji
