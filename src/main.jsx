import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import App from './App.jsx';
// Import bootstrap here to use it across all files
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
