import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './components/routes/Routes.tsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter>
  <React.StrictMode>
      <Routes />
  </React.StrictMode>
  </BrowserRouter>
);
