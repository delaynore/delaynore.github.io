import React from 'react';
import { createRoot } from 'react-dom/client'
import { App } from "./Components/App/App.js";
import './common.css';

const root = createRoot(document.getElementById('root'));
root.render(<App/>);