import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root') || document.createElement('div');

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

