import React from 'react';
import reactDOM from 'react-dom';
import App from './App';
// DOM
const root = document.getElementById("root");
// tao react DOM
const reactRoot = reactDOM.createRoot(root)
// render 
// jsx
reactRoot.render(<App />)

// Bước 1: npm install -g create-react-app
// Bước 2: npx create-react-app <ten file>
// Bước 3: Xoá các files trong src
// Bước 4: Tạo file src/index.js