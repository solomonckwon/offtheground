import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClimbsContextProvider } from './context/ClimbContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ClimbsContextProvider>
        <App />
    </ClimbsContextProvider>
  </React.StrictMode>
);

