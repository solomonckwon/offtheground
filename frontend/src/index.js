import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import { ClimbsContextProvider } from './context/ClimbContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <ClimbsContextProvider>
        <App />
    </ClimbsContextProvider>
    </WorkoutsContextProvider>
  </React.StrictMode>
);

