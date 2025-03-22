import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App.jsx';
import Profiles from './components/Proflies.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/profiles" />} />
        <Route path="/:name?" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
