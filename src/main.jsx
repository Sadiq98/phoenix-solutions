import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
// import { HashRouter } from 'react-router-dom'; 
import App from './App';
import './index.css';

const BASE_PATH = import.meta.env.VITE_SITE_PATH || "/";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_PATH}>
      <App />
    </BrowserRouter>
    {/* <HashRouter>
      <App />
    </HashRouter> */}
  </React.StrictMode>
);



